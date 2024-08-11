import React, {useState} from 'react';
import '../../styles/PlaceImages.css';

interface PlaceImagesProps {
    images: string[];
}

function PlaceImages({ images }: PlaceImagesProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider">
            <button className="slider-button prev-button" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="slider-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`slider-image ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    />
                ))}
            </div>
            <button className="slider-button next-button" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="dots-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default PlaceImages;