import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SelectFilter from "../components/SelectFilter";

const StyledMobileFilterContainer = styled.div``;

const FiltersMobileContainer = props => {
  // RATING FILTERS
  const [filterRating, setFilterRating] = useState(1);
  const [filterStar, setFilterStar] = useState([]);
  const onChangeCheckbox = (value) => {
    if(value == 'any') {
      return setFilterStar([]);  
    }
    if (filterStar.includes(value)) {
      let copy = filterStar;
      let index = copy.indexOf(value);
      copy.splice(index, 1);
      return setFilterStar([...copy]);
    }
    setFilterStar([...filterStar, value]);
  }
  useEffect(() => {
    props.filterHotels({
      rating: filterRating,
      stars: filterStar
    });
  });
  return (
    <div>
      <StyledMobileFilterContainer>
        <SelectFilter
          title="Guest Rating"
          type="radio"
          blue
          name="radioRating"
          onChange={setFilterRating}
          options={[
            {
              label: "6+",
              value: 6
            },
            {
              label: "7+",
              value: 7
            },
            {
              label: "8+",
              value: 8
            },
            {
              label: "9+",
              value: 9
            }
          ]}
        />
        <SelectFilter
          title="Star Rating"
          type="checkbox"
          yellow
          name="checkboxStar"
          onChange={onChangeCheckbox}
          options={[
            {
              label: "2",
              value: 2
            },
            {
              label: "3",
              value: 3
            },
            {
              label: "4",
              value: 4
            },
            {
              label: "5",
              value: 5
            }
          ]}
        />
      </StyledMobileFilterContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  hotels: state.hotels
});

const mapDispatchToProps = dispatch => ({
  filterHotels: data => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      rating: data.rating,
      stars: data.stars,
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersMobileContainer);
