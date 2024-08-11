import React, {useEffect, useRef} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {fetchPlaces} from '../api';
import {filteredPlacesState, hasMoreState, loadingState, pageState, placeListState} from '../recoil/placeState';
import PlaceList from '../components/place/PlaceList';
import Filter from '../components/Filter';

function PlaceListPage() {
    const [places, setPlaces] = useRecoilState(placeListState);
    const filteredPlaces = useRecoilValue(filteredPlacesState);
    const [page, setPage] = useRecoilState(pageState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const [hasMore, setHasMore] = useRecoilState(hasMoreState);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastPlaceElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loadPlaces = async () => {
            try {
                setLoading(true);
                const data = await fetchPlaces(page);
                setPlaces((prevPlaces) => [...prevPlaces, ...data]);
                setHasMore(data.length > 0);
                setLoading(false);
            } catch (error) {
                console.error('Failed to load places', error);
                setLoading(false);
            }
        };

        loadPlaces();
    }, [page, setPlaces, setLoading, setHasMore]);

    useEffect(() => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        });

        if (lastPlaceElementRef.current) {
            observer.current.observe(lastPlaceElementRef.current);
        }
    }, [loading, hasMore, setPage]);

    return (
        <div>
            <Filter/>
            <PlaceList places={filteredPlaces} lastPlaceElementRef={lastPlaceElementRef}/>
            {loading && <p>Loading more places...</p>}
        </div>
    );
}

export default PlaceListPage;