import React from 'react'
import './RestaurantDetailsCard1.css'
import { CLOUDINARY__IMAGE_PREFIX } from '../utils/constant';

const RestaurantDetailsCard1 = (props) => {

    const {resInfo} = props;

    const { totalRatingsString, areaName, costForTwoMessage, avgRatingString, cuisines,cloudinaryImageId} = resInfo;

    const {minDeliveryTime,maxDeliveryTime} = resInfo.sla;

    const {message} = resInfo.feeDetails;
    
  return (
    <div className="res-details-card">
      
    <div>
    <div className="res-rating-cost">
        <div>
         <span className="res-rating">{avgRatingString} ({totalRatingsString})</span>
         <span className="res-cost">{costForTwoMessage}</span>
        </div>
    </div>
    <div className="res-cuisines">
      <span>{cuisines.join(', ')}</span>


    </div>

    <div className="res-location-time">
      <span className="res-location">Outlet {areaName}</span>
      <span className="res-time"> {minDeliveryTime === maxDeliveryTime? minDeliveryTime: `${maxDeliveryTime}-${minDeliveryTime}`} mins</span>
   </div>
   
  <div className="res-delivery">
    <span>{message}</span>
  </div>
    </div>
   
    <div>
     <img className="resTaurantimage-image" alt="res-image" 
       src={CLOUDINARY__IMAGE_PREFIX+cloudinaryImageId}/>
    </div>

   </div>
  )
}

export default RestaurantDetailsCard1