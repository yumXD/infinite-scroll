import React from 'react';

interface PlaceAddressProps {
    address: string;
}

function PlaceAddress({address}: PlaceAddressProps) {
    return <p>{address}</p>;
}

export default PlaceAddress;
