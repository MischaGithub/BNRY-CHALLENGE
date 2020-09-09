import React, {Fragment, useContext, useEffect } from "react";
import ImageContext from "../../context/Images/imageContext";
import SlideItem from "./SlideItem";


const Images = () => {

    // Initalizing the context
    const imageContext = useContext(ImageContext);

    // Pulling out the data with destructing
    const { slides, getSlide, loading } = imageContext;

    useEffect(() => {
        getSlide();
        // eslint-disable-next-line
    }, []);
    
    return (
            <div>
            {slides.map(slide => (
                <SlideItem key={slide.id} slide={slide} />

            ))}
            </div>
    )
}

export default Images;