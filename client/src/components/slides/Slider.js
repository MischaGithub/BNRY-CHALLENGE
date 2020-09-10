import React, { Fragment, useRef, useEffect, useContext , useState} from "react";
import { Slide } from "react-slideshow-image";
import ImageContext from "../../context/Images/imageContext";
import SlideItem from "./SlideItem";
import Spinner from "../layout/Spinner";
import { Button , UncontrolledTooltip } from "reactstrap";


const Slider = ({ slide, $ }) => {

     // Initalizing the context
     const imageContext = useContext(ImageContext);

     // Pulling out the data with destructing
     const { slides, getSlide, loading } = imageContext;
 
     useEffect(() => {
         getSlide();
         // eslint-disable-next-line
     }, []);


  const slideRef = useRef();

  const [previousIndex, setPreviousIndex] = useState(null);
  const [nextIndex, setNextIndex ] = useState();


  const style = {
     textAlign: "center",
   
   };

  const properties = {
    autoplay: false,
    indicators: false,
    arrows: false,
    onChange: (previous, next) => {
      setPreviousIndex(previous);
      setNextIndex(next + 2)
    }
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
        {slides !== null && !loading ? (
        <Slide ref={slideRef} {...properties} >
            {slides.map(slide =>
                <div key={slideRef} style={style} className="slide">
                    <SlideItem key={slide.id} slide={slide}/>
                </div>
                )}
        </Slide>
      ) : <Spinner />}
      

      
        </div>

        <div className="autoplay-buttons">
          <div className="next-button">
      
            <button className="btn-sm"  type="button" onClick={next}>Next</button>
    
            <p ><i className="fa fa-info" style={{textDecoration: "underline", color: "blue"}} href="#" id="UncontrolledTooltipExample" ></i></p>
            <UncontrolledTooltip style={{ width: "50px", height: "50px"}}placement="right" target="UncontrolledTooltipExample">
              The next slide is {nextIndex}

            </UncontrolledTooltip>
   

          </div>

          <div className="previous-button">


          <button className="btn-sm" type="button" onClick={previous}>Previous</button>

          <p ><i className="fa fa-info" style={{textDecoration: "underline", color: "blue"}} href="#" id="UncontrolledTooltipExample" ></i></p>
          <UncontrolledTooltip style={{ width: "50px", height: "50px"}}placement="right" target="UncontrolledTooltipExample">
            The previous slide is {previousIndex}

          </UncontrolledTooltip>
   


          </div>

        </div>
        
      
      </Fragment>
    

  );
};

export default Slider;