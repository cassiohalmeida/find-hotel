import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SelectFilter from "../components/SelectFilter";
import { starFilter } from "../selectors";

const StyledMobileFilterContainer = styled.div``;

const FiltersMobileContainer = props => {
  // RATING FILTERS
  const [filterRating, setFilterRating] = useState(1);
  const [filterStar, setFilterStar] = useState([
    {
      label: "Any",
      value: 1,
      checked: false,
    },
    {
      label: "2",
      value: 2,
      checked: false,
    },
    {
      label: "3",
      value: 3,
      checked: false,
    },
    {
      label: "4",
      value: 4,
      checked: false,
    },
    {
      label: "5",
      value: 5,
      checked: false,
    }
  ]);
  const onChangeCheckbox = (value) => {
    if (value == 1) {
      let copy = filterStar;
      copy.forEach((star) => {
        if(star.value != 1) {
          star.checked = false;
        } else {
          star.checked = true;
        }
      })
      return setFilterStar([...copy]);
    }
    let result = filterStar
    let index = filterStar.findIndex(x => x.value == value);
    let anyIndex = filterStar.findIndex(x => x.value == 1);
    result[index].checked = !result[index].checked;
    result[anyIndex].checked = false;
    setFilterStar([...result]);
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
          options={filterStar}
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
