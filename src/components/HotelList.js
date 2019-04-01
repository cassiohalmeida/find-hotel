import React from "react";
import styled from "styled-components";
import room from "../assets/room.jpg";
import LeadButton from './LeadButton';

const TotalContainer = styled.div`
  padding: 10px;
`;
const ListContainer = styled.div`
  padding: 25px;
  padding-top: 0;
`;

const ListItem = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: 420px auto 300px;
  grid-gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    text-align:center;
  }
`;

const HotelImage = styled.div`
  img {
    max-width: 100%;
  }
`;

const HotelInfo = styled.div`
  padding: 10px 0;
`;

const HotelPrice = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;
  text-align: center;

  .oldPrice {
    text-decoration-line: line-through;
    color: #ff4605;
  }
  .price {
    color: #000000;
    font-size: 26px;
  }
  .freeCancellation {
    color: #147d39;
    font-weight: bold;
  }
  .showDetails {
    font-weight: bold;
    text-align: center;
  }
`;

const HotelDistance = styled.div`
  p {
    color: #2796e9;
  }
  i {
    margin-right: 10px;
  }
`;

const HotelRating = styled.div``;

const HotelTags = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 10px 20px;
  border-radius: 50px;
  background: #f2f2f2;
  margin: 5px;
`
const OtherPrice = styled.a`
  display:flex;
  justify-content: space-between;
  color: #000;
  font-size: 12px;
  margin: 5px 0;
  text-decoration: none;
`
const getAllStarRating = star_rating => {
  let result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(
      <i
        key={star_rating + i}
        style={{ color: star_rating >= i ? "#ff6b34" : "#dedede" }}
        className="far fa-star"
      />
    );
  }
  return result;
};
const getTags = (tags) => {
  let result = [];
  tags.forEach(tag => {
    result.push(<Tag key={tag + Math.random()}>{tag}</Tag>)
  });
  return result;
}
const otherPrices = (other_prices) => {
  let result = [];
  other_prices.forEach(hotel => {
    result.push(<OtherPrice key={hotel.site} href={hotel.site} target="_blank">
      <span>{hotel.site}</span>
      <span>€{hotel.price}</span>
    </OtherPrice>)
  });
  return result;
}
const hotelList = props => {
  if (props.hotels.length != 0) {
    return (
      <ListContainer>
        <TotalContainer>{props.hotels.length}</TotalContainer>
        {props.hotels.map(hotel => (
          <ListItem key={hotel._id}>
            <HotelImage>
              <img src={room} />
            </HotelImage>
            <HotelInfo>
              <h3>{hotel.title}</h3>
              {getAllStarRating(hotel.star_rating)}
              <HotelDistance>
                <p>
                  <i className="fas fa-location-arrow" />
                  {hotel.distance_center}KM to city center
                </p>
              </HotelDistance>
              <HotelRating>
                <i
                  style={{
                    color:
                      hotel.review_rating.rating < 5 ? "#f5a623" : "#137d15"
                  }}
                  className="far fa-smile"
                />{" "}
                {hotel.review_rating.comment} {hotel.review_rating.rating}
              </HotelRating>
              <HotelTags>{getTags(hotel.tags)}</HotelTags>
            </HotelInfo>
            <HotelPrice>
              <div className="oldPrice">€{hotel.old_price}</div>
              <div className="price">€{hotel.price}</div>
              <div className="freeCancellation">
                Free Cancellation
              </div>
              <LeadButton href={hotel.site} name={hotel.site_name}></LeadButton>
              <div>
                {otherPrices(hotel.other_prices)}
              </div>
              <p className="showDetails">Show details</p>
            </HotelPrice>
          </ListItem>
        ))}
      </ListContainer>
    );
  }
  return (
    <ListContainer>
      There is no hotel room with your choices. Try to change the filters!
    </ListContainer>
  );
};
export default hotelList;
