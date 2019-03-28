import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  height: 185px;
`;

export default props => {
  return (
    <FiltersContainer>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </FiltersContainer>
  );
};
