import React from 'react';

interface PlaceThumbnailProps {
    thumbnail: string;
    altText: string;
}

function PlaceThumbnail({thumbnail, altText}: PlaceThumbnailProps) {
    return <img src={thumbnail} alt={altText}/>;
}

export default PlaceThumbnail;
