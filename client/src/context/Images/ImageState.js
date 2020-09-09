import React, { useReducer } from "react";
import ImageContext from "./imageContext";
import imageReducer from "./imageReducer";
import {
    GET_SLIDE,
    SLIDE_ERROR
} from "../types";
import axios from "axios";

const ImageState = props => {
    const initialState = {
        slides: [],
        error: null
    };

    const [ state, dispatch ] = useReducer(imageReducer, initialState);

    // Get Slides
    const getSlide =  async () => {
        try {
            const res = await axios.get("/api/images");

            dispatch({
                type: GET_SLIDE,
                payload: res.data
            });
            
        } catch (err) {
            dispatch({
                type: SLIDE_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Slides Error

    return (
        <ImageContext.Provider
        
        // Providing the values
        value={{
            slides: state.slides,
            getSlide

        }}
        >
            { props.children }
        </ImageContext.Provider>
    )
};

export default ImageState;