import React, {useEffect, useRef} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {fetchPlaces} from '../api';
import {
    filteredPlacesState,
    hasMoreState,
    loadingState,
    pageState,
    placeListState,
    selectedCategoryState
} from '../recoil/placeState';
import PlaceList from '../components/place/PlaceList';
import Filter from '../components/Filter';

function PlaceListPage() {
    const [places, setPlaces] = useRecoilState(placeListState);
    const filteredPlaces = useRecoilValue(filteredPlacesState);
    const [page, setPage] = useRecoilState(pageState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const [hasMore, setHasMore] = useRecoilState(hasMoreState);
    const [selectedCategory] = useRecoilState(selectedCategoryState);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastPlaceElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedCategory !== 'All') return;

        const loadPlaces = async () => {
            try {
                setLoading(true);
                const data = await fetchPlaces(page);
                setPlaces((prevPlaces) => {
                    const combinedPlaces = [...prevPlaces, ...data];
                    // 중복 제거: name을 기준으로 중복된 항목 필터링
                    return combinedPlaces.filter((place, index, self) =>
                        index === self.findIndex((p) => p.name === place.name)
                    );
                });
                setHasMore(data.length > 0);
                setLoading(false);
            } catch (error) {
                console.error('Failed to load places', error);
                setLoading(false);
            }
        };

        loadPlaces();
    }, [page, setPlaces, setLoading, setHasMore, selectedCategory]);

    useEffect(() => {
        if (selectedCategory !== 'All' || loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        });

        if (lastPlaceElementRef.current) {
            observer.current.observe(lastPlaceElementRef.current);
        }
    }, [loading, hasMore, setPage, selectedCategory]);

    return (
        <div>
            <Filter/>
            <PlaceList places={filteredPlaces}
                       lastPlaceElementRef={selectedCategory === 'All' ? lastPlaceElementRef : null}/>
            {loading && selectedCategory === 'All' && <p>Loading more places...</p>}
        </div>
    );
}

export default PlaceListPage;
