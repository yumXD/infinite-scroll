import React from 'react';

interface PlaceImagesProps {
    images: string[];
}

function PlaceImages({images}: PlaceImagesProps) {
    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`place-image-${index}`}/>
            ))}
        </div>
    );
}

export default PlaceImages;
