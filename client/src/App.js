import React, {Fragment} from 'react';
import './App.css';
import { Slide } from 'react-slideshow-image';

import Navbar from "./components/layout/Navbar";
import SlideState from "./context/slide/SlideState";
import SlideShow from "./components/slides/SlideShow";

const App = () => {
  return (
    <SlideState>
       <Fragment>
          <Navbar/>
            <div className="container">
              <SlideShow />
              </div>
               
        </Fragment>
    </SlideState>
   
  );
}

export default App;
