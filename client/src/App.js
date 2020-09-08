import React, {Fragment} from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar";
import SlideState from "./context/slide/SlideState";

const App = () => {
  return (
    <SlideState>
       <Fragment>
          <Navbar/>
            <div className="container">
              Image Slider
             </div>
      
        </Fragment>
    </SlideState>
   
  );
}

export default App;
