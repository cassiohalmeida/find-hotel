import React from "react";
export default props => {
  return (
    <div>
      <div>{props.hotels.length}</div>
      <ul>
        {props.hotels.map(hotel => (
          <li key={hotel._id}>{hotel.title}</li>
        ))}
      </ul>
    </div>
  );
};
