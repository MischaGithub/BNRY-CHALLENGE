import React, { Fragment, useRef, useEffect, useContext } from "react";
import { Slide } from "react-slideshow-image";
import ImageContext from "../../context/Images/imageContext";
import SlideItem from "./SlideItem";
import Spinner from "../layout/Spinner";

const Slider = ({ slide }) => {

     // Initalizing the context
     const imageContext = useContext(ImageContext);

     // Pulling out the data with destructing
     const { slides, getSlide, loading } = imageContext;
 
     useEffect(() => {
         getSlide();
         // eslint-disable-next-line
     }, []);
  const slideRef = useRef();

  const style = {
     textAlign: "center",
   
   };

  const properties = {
    autoplay: false,
    arrows: false
  };

  const previous = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

 
  return (
      <Fragment>
          <div > 
        {/*  If slides is not === null and not loading then show slides else show spinner */}
        {slides !== null && !loading ? (<div>
        <Slide ref={slideRef} {...properties}>
            {slides.map(slide =>
                <div style={style} className="slide">
                    <SlideItem key={slide.id} slide={slide}/>
                </div>
                )}
        </Slide>
      </div>) : <Spinner />}
      

      
        </div>
        <div className="autoplay-buttons">
            <button className="btn-sm" type="button" onClick={previous}>Previous</button>
            <button className="btn-sm"  type="button" onClick={next}>Next</button>
        </div>
      </Fragment>
    

  );
};

export default Slider;