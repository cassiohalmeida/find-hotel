import React from "react";
import styled from "styled-components";
import logo from "../assets/findthotel_logo.png";

const Logo = styled.img`
  max-width: 130px;
`;
export default () => {
  return <Logo alt="Find Hotel Logo" src={logo} />;
};
