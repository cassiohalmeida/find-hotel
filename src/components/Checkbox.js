import React from "react";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  float: left;
  margin: 4px;
  border-radius: 4px;
  overflow: auto;
  cursor: pointer;
  color: #ffffff;

  ${props =>
    props.blue &&
    css`
      background-color: #2d8beb;
    `}

  ${props =>
    props.yellow &&
    css`
      background-color: #f1be01;
    `}

  input {
    position: absolute;
    top: -20px;
  }
  input:checked + span {
    background-color: #404040;
    color: #f7f7f7;
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  font-size: 32px;
  padding: 5px 0px;
  display: block;
  font-size: 30px;
`;

const Checkbox = (props) => {
  const getLabel = () => {
    if(props.value !== 'any') {
      return <StyledSpan>{props.label}<i className="fas fa-star"></i></StyledSpan>
    }
    return <StyledSpan>{props.label}</StyledSpan>
  }
  return <StyledLabel blue={props.blue} yellow={props.yellow}>
    <input onChange={e => props.onChange(e.target.value)} value={props.value} type="checkbox" name={props.name}/>
    {getLabel()}
  </StyledLabel>
};

export default Checkbox;
