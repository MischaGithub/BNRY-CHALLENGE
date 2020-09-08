import React from "react";

const SlideItem = ({ slide}) => {

    // Pulling out the info needed
    const { id, image_url, name, description} = slide;
    return(
        <div>
            <div className="card">
              <img src={image_url} alt="img"/>
              <div className="details">
                <span className="index">{id}</span>
                <p className="location">
                  {name}
                  {description}</p>
              </div>
            </div>
          </div>
      
    )
}

export default SlideItem;