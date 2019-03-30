import React from "react";
export default props => {
  return (
    <div>
      <div>{props.hotels.length}</div>
      <ul>
        {props.hotels.map(hotel => (
          <li key={hotel._id}>
            | {hotel.title} 
            | price: {hotel.price}
            | rating: {hotel.review_rating.rating}
            | Distance: {hotel.distance_center}
          </li>
        ))}
      </ul>
    </div>
  );
};
