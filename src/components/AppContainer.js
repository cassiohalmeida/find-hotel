import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background: #f2f2f2;
  max-width: 1360px;
  margin: 0 auto;
`;
export default props => {
  return <AppContainer>{props.children}</AppContainer>;
};
