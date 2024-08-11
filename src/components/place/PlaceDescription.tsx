import React from 'react';

interface PlaceDescriptionProps {
    description: string;
}

function PlaceDescription({description}: PlaceDescriptionProps) {
    return <p>{description}</p>;
}

export default PlaceDescription;
