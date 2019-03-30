import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledFiltersContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  height: 185px;
`;

const FiltersContainer = props => {
  return (
    <div>
      <StyledFiltersContainer>
        <div>
          <input
            type="range"
            min="100"
            max="800"
            onInput={props.filterByPrice}
            className="slider"
            id="filterPrice"
          />
        </div>
        <div>
          <input
            type="range"
            min="1"
            defaultValue="1"
            max="10"
            onInput={props.filterByRating}
            className="slider"
            id="filterRating"
          />
        </div>
        <div>3</div>
      </StyledFiltersContainer>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  filterByPrice: e => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter: "FILTER_BY_MAX_PRICE",
      price: e.target.value
    });
  },
  filterByRating: e => {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'FILTER_BY_MIN_RATING',
      rating: e.target.value
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FiltersContainer);
