import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledFiltersContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  height: 185px;
`;

const FiltersContainer = props => {
  const [filterPrice, setFilterPrice] = useState(400);
  const [filterRating, setFilterRating] = useState(3);
  const [filterDistance, setFilterDistance] = useState(2);
  useEffect(() => {
    props.filterHotels({
      price: filterPrice,
      rating: filterRating,
      distance_center: filterDistance
    })
  });
  return (
    <div>
      {filterPrice}
      <br />
      {filterRating}
      <br/>
      {filterDistance}
      <StyledFiltersContainer>
        <div>
          <input
            type="range"
            defaultValue={filterPrice}
            min="100"
            max="800"
            onInput={e => {
              setFilterPrice(e.target.value);
            }}
            className="slider"
            id="filterPrice"
          />
        </div>
        <div>
          <input
            type="range"
            min="1"
            defaultValue={filterRating}
            max="10"
            onInput={e => {
              setFilterRating(e.target.value);
            }}
            className="slider"
            id="filterRating"
          />
        </div>
        <div>
          <input
            type="range"
            min="1"
            defaultValue={filterDistance}
            max="10"
            onInput={e => {
              setFilterDistance(e.target.value);
            }}
            className="slider"
            id="filterDistance"
          />
        </div>
        <div>3</div>
      </StyledFiltersContainer>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  filterHotels: data => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      price: data.price,
      rating: data.rating,
      distance_center: data.distance_center
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FiltersContainer);
