import React from 'react';
import {Link} from 'react-router-dom';

interface PlaceNameProps {
    name: string;
}

function PlaceName({name}: PlaceNameProps) {
    return (
        <h3 className="place-name">
            <Link to={`/places/${name}`}>
                {name}
            </Link>
        </h3>
    );
}

export default PlaceName;
