import React from 'react';
import PlaceThumbnail from './PlaceThumbnail';
import PlaceName from './PlaceName';
import PlaceAddress from './PlaceAddress';
import {Link} from 'react-router-dom';

interface PlaceCardProps {
    name: string;
    thumbnail: string;
    address: string;
}

function PlaceCard({name, thumbnail, address}: PlaceCardProps) {
    return (
        <Link to={`/places/${name}`}>
            <div>
                <PlaceThumbnail thumbnail={thumbnail} altText={name}/>
                <PlaceName name={name}/>
                <PlaceAddress address={address}/>
            </div>
        </Link>
    );
}

export default PlaceCard;
