import React from "react";

const ImageItem = ({ slide}) => {

    // Pulling out the info needed
    const { image_url, name, description} = slide;
    return(
        <div>
            <div className="container">
              <img src={image_url} alt="img" />
              <div className="details">
                <p className="location">
                  {name}</p>
                <p className="location">
                  {description}</p>
              </div>
            </div>
          </div>
      
    )
};

export default ImageItem;