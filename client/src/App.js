import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import ImageState from "./context/Images/ImageState";
import Home from "./components/layout/Home";

const App = () => {
  return (
    <ImageState>
       <Fragment>
          <Navbar/>
        
              <Home />
          
        </Fragment>
    </ImageState>
   
  );
}

export default App;
