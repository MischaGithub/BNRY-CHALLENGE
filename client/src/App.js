import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import ImageState from "./context/Images/ImageState";
import Slider from "./components/Slides/Slider";
import 'react-slideshow-image/dist/styles.css'

const App = () => {
  return (
    <ImageState>
       <Fragment>
          <Navbar/>

            <div className="container">
              <div>
              <Slider />
              </div>
            </div>
          
        </Fragment>
    </ImageState>
   
  );
}

export default App;
