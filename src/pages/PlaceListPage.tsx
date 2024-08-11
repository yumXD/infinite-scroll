import React, {useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {fetchPlaces} from '../api';
import {placeListState, filteredPlacesState} from '../recoil/placeState';
import PlaceList from '../components/place/PlaceList';
import Filter from '../components/Filter';

function PlaceListPage() {
    const [places, setPlaces] = useRecoilState(placeListState);
    const filteredPlaces = useRecoilValue(filteredPlacesState);

    useEffect(() => {
        const loadPlaces = async () => {
            try {
                const data = await fetchPlaces(1);
                setPlaces(data);
            } catch (error) {
                console.error('Failed to load places', error);
            }
        };

        loadPlaces();
    }, [setPlaces]);

    return (
        <div>
            <PlaceList places={filteredPlaces}/>
        </div>
    );
}

export default PlaceListPage;
