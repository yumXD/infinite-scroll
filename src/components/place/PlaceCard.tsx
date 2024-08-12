import React from 'react';
import PlaceThumbnail from './PlaceThumbnail';
import PlaceName from './PlaceName';
import PlaceAddress from './PlaceAddress';
import {Link} from 'react-router-dom';
import '../../styles/PlaceCard.css'

interface PlaceCardProps {
    name: string;
    thumbnail: string;
    address: string;
}

function PlaceCard({name, thumbnail, address}: PlaceCardProps) {
    return (
        <div className="place-card">
            <Link to={`/places/${name}`} className="thumbnail-link">
                <PlaceThumbnail thumbnail={thumbnail} altText={name}/>
            </Link>
            <div className="place-info">
                <PlaceName name={name} isLink={true} />
                <PlaceAddress address={address}/>
            </div>
        </div>
    );
}

export default PlaceCard;
