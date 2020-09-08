import React, {Fragment, useContext} from "react";
import SlideContext from "../../context/slide/slideContext";
import SlideItem from "./SlideItem"


const SlideShow = () => {

    // Initalizing the context
    const slideContext = useContext(SlideContext);

    // Pulling out the data with destructing
    const { slides } = slideContext;
    return (
        <Fragment>
            <div>
            {slides.map(slide => (
                <SlideItem slide={slide} />

            ))}
            </div>
        </Fragment>
    )
}

export default SlideShow;