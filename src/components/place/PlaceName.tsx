import React from 'react';

interface PlaceNameProps {
    name: string;
}

function PlaceName({name}: PlaceNameProps) {
    return <h3>{name}</h3>;
}

export default PlaceName;
