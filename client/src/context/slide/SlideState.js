import React, { useReducer } from "react";
import { uuid as v4 } from "uuid";
import SlideContext from "./slideContext";
import slideReducer from "./slideReducer";
import {
    GET_SLIDES,
    SLIDES_ERROR
} from "../types";

const SlideState = props => {
    const initialState = {
        slides: [
           {
            id: 1,
            image_url: "https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F9418374%2Ftel-aviv-israel_dest_1077741064.jpg&width=412",
            name: "Te Aviv",
            description: "Tel Aviv, a city on Israel’s Mediterranean coast"
           },
           {
            id: 2,
            image_url: "https://static.amazon.jobs/locations/58/thumbnails/NYC.jpg?1547618123",
            name: "New York",
            description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean."
           },
           {
            id: 3,
            image_url: "https://imagevars.gulfnews.com/2019/09/29/Dubai-skyline_16d7de0fdce_medium.jpg",
            name: "Dubai",
            description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene."
           }

        ]
    };

    const [ state, dispatch ] = useReducer(slideReducer, initialState);

    // Get Slides

    // Slides Error

    return (
        <SlideContext.Provider
        
        // Providing the values
        value={{
            slides: state.slides
        }}
        >
            { props.children }
        </SlideContext.Provider>
    )
};

export default SlideState;