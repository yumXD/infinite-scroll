import React from 'react';
import {Link} from 'react-router-dom';

interface PlaceNameProps {
    name: string;
    isLink: boolean;
}

function PlaceName({name, isLink}: PlaceNameProps) {
    return (
        <h3 className="place-name">
            {isLink ? (
                <Link to={`/places/${name}`}>
                    {name}
                </Link>
            ) : (
                name
            )}
        </h3>
    );
}

export default PlaceName;
