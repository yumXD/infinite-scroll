import React from 'react';
import {Place} from '../../types';
import PlaceCard from './PlaceCard';

interface PlaceListProps {
    places: Place[];
    lastPlaceElementRef: React.RefObject<HTMLDivElement> | null;
}

function PlaceList({places, lastPlaceElementRef}: PlaceListProps) {
    return (
        <ul>
            {places.map((place, index) => (
                <li key={place.name}>
                    <div ref={index === places.length - 1 && lastPlaceElementRef ? lastPlaceElementRef : null}>
                        <PlaceCard
                            name={place.name}
                            thumbnail={place.thumbnail}
                            address={place.address}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default PlaceList;
