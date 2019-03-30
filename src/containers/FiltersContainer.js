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
    <StyledFiltersContainer>
      <div>
        <input
          type="range"
          min="100"
          max="800"
          onInput={props.filterByPrice}
          className="slider"
          id="myRange"
        />
      </div>
      <div>2</div>
      <div>3</div>
    </StyledFiltersContainer>
  );
};
const mapStateToProps = (state) => ({
  state: state
})
const mapDispatchToProps = dispatch => ({
  filterByPrice: e => {
    dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'FILTER_BY_MAX_PRICE', price: e.target.value});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
