import React from "react";
import styled from "styled-components";

const StyledLeadButton = styled.a`
  background: #ff4605;
  padding: 10px 40px;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  i {
    margin-left: 10px;
  }
`;

const LeadButton = props => {
  return (
    <StyledLeadButton target="_blank" href={props.href}>
      {props.name}
      <i className="fas fa-long-arrow-alt-right" />
    </StyledLeadButton>
  );
};

export default LeadButton;
