import React from 'react'
import { StarFill, StarHalf, Star as StarEmpty } from 'react-bootstrap-icons'
export function FiveStarRating({ rating }) {
    //declare the star icon array
    const starList = [];

    //store number of filled stars
    const starFillCount = Math.floor(rating);
    //store if yes or no half star
    const hasHalfStar = rating - parseInt(rating) >= 0.5;
    //store number of empty stars
    const emptyStarCount  = 5 - starFillCount - (hasHalfStar ? 1: 0);
    //push filled star icons
     for(let i=1; 1<=starFillCount; i++){
        starList.push(<StarFill key={"star-fill"+i}/>);
     }
     //push a half star icon if necessary
     if(hasHalfStar){
        starList.push(<StarHalf key={"star-half"}/>);
     }
     //push empty star
     for(let i=1; 1<=emptyStarCount; i++){
        starList.push(<StarEmpty key={"star-empty"+i}/>);
     }



  return (
    <div>{starList}</div>
  )
}
