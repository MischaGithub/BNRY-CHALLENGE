import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import SlideState from "./context/Slides/SlideState";
import Slider from "./components/Slides/Slider";
import 'react-slideshow-image/dist/styles.css'

const App = () => {
  return (
    <SlideState>
       <Fragment>
          <Navbar/>
              <Slider />  
        </Fragment>
    </SlideState>
   
  );
}

export default App;
