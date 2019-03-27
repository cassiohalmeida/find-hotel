import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
  background: #2795e7;
  height: 97px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const LogoContainer = styled.div`
  padding: 20px;
`;
export default () => {
  return (
    <Header>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Header>
  );
};
