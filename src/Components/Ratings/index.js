import React from "react";
import {View} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function RatingComponent(){

    return(

            <AirbnbRating
            ratingCount={5}
            showRating={false}
            defaultRating={3}
            reviewSize={0}
            size={10}
            />
    )
}
