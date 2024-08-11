import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { placeListState } from '../recoil/placeState';
import PlaceName from '../components/place/PlaceName';
import PlaceAddress from '../components/place/PlaceAddress';
import PlaceDescription from '../components/place/PlaceDescription';
import PlaceImages from '../components/place/PlaceImages';

function PlaceDetail() {
    const { name } = useParams<{ name: string }>();
    const places = useRecoilValue(placeListState);
    const place = places.find((place) => place.name === name);

    if (!place) return <div>Loading...</div>;

    return (
        <div>
            <PlaceName name={place.name} />
            <PlaceAddress address={place.address} />
            <PlaceImages images={place.images} />
            <PlaceDescription description={place.description} />
        </div>
    );
}

export default PlaceDetail;
