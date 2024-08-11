import React from 'react';
import PlaceCard from './PlaceCard';
import {Place} from "../../types";

interface PlaceListProps {
    places: Place[];
}

function PlaceList({places}: PlaceListProps) {
    return (
        <ul>
            {places.map((place, index) => (
                <li key={`${place.name}-${index}`}>
                    <PlaceCard
                        name={place.name}
                        thumbnail={place.thumbnail}
                        address={place.address}
                    />
                </li>
            ))}
        </ul>
    );
}

export default PlaceList;
