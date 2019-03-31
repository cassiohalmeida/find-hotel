import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SliderFilter from "../components/SliderFilter";

const StyledFiltersContainer = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 185px;
  grid-gap: 30px;
`;

const FiltersContainer = props => {
  // PRICE FILTERS
  const [filterPrice, setFilterPrice] = useState(400);
  // RATING FILTERS
  const [filterRating, setFilterRating] = useState(5);
  // DISTANCE FILTERS
  const [filterDistance, setFilterDistance] = useState(5);
  useEffect(() => {
    props.filterHotels({
      price: filterPrice,
      rating: filterRating,
      distanceCenter: filterDistance,
    });
  });
  return (
    <StyledFiltersContainer>
      <SliderFilter
        type="money"
        title="Max price"
        defaultValue={filterPrice}
        onInput={setFilterPrice}
        min={100}
        max={800}
        step={100}
        id="filterPrice"
        data={props.hotels}
      />
      <SliderFilter
        type="rating"
        title="Min rating"
        defaultValue={filterRating}
        onInput={setFilterRating}
        min={1}
        max={10}
        step={1}
        id="filterRating"
        data={props.hotels}
      />
      <SliderFilter
        type="distance"
        title="Distance from city center"
        defaultValue={filterDistance}
        onInput={setFilterDistance}
        min={1}
        max={10}
        step={1}
        id="filterDistance"
        data={props.hotels}
      />
    </StyledFiltersContainer>
  );
};

const mapStateToProps = state => ({
  hotels: state.hotels
});

const mapDispatchToProps = dispatch => ({
  filterHotels: data => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      price: data.price,
      rating: data.rating,
      distanceCenter: data.distanceCenter
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
