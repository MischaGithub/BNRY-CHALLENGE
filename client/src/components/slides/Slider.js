import React, { useRef, useEffect, useContext } from "react";
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

//   const style = {
//     textAlign: "center",
//     background: "teal",
//     padding: "200px 0",
//     fontSize: "30px"
//   };

  const properties = {
    autoplay: false,
    arrows: false
  };

  const back = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  return (
    <div> 
        {slides !== null && !loading ? (<div>
        <Slide ref={slideRef} {...properties}>
            {slides.map(slide =>
                <div>
                    <SlideItem key={slide.id} slide={slide}/>
                </div>
                )}
        </Slide>
      </div>) : <Spinner />}
      

      <div className="autoplay-buttons">
        <button type="button" onClick={back}>Back</button>
        <button type="button" onClick={next}>Next</button>
      </div>
    </div>
  
  );
};

export default Slider;