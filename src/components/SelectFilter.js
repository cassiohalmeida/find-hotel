import React from "react";
import RadioButton from "../components/RadioButton";
import Checkbox from "../components/Checkbox";
import styled, { css } from "styled-components";

const SelectFiltersContainer = styled.div`
  padding: 20px;
  .filters {
    grid-gap: 5px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .title {
    font-weight: bold;
  }
`;
const SelectFilter = props => {
  const getRadios = options => {
    let result = [];
    result.push(
      <RadioButton
        key={props.name + 'AnyRadio'}
        label="Any"
        value="1"
        onChange={props.onChange}
        name={props.name}
        yellow={props.yellow}
        blue={props.blue}
      />
    );
    options.forEach(option => {
      result.push(
        <RadioButton
          key={option.label+options.value}
          label={option.label}
          value={option.value}
          name={props.name}
          onChange={props.onChange}
          yellow={props.yellow}
          blue={props.blue}
        />
      );
    });
    return result;
  };
  const getCheckboxes = options => {
    let result = [];
    options.forEach(option => {
      result.push(
        <Checkbox
          key={option.label+options.value}
          label={option.label}
          value={option.value}
          name={props.name}
          checked={option.checked}
          onChange={props.onChange}
          yellow={props.yellow}
          blue={props.blue}
        />
      );
    });
    return result;
  };
  const getButtons = (options) => {
    if(props.type == 'radio') {
      return getRadios(options);
    }
    return getCheckboxes(options);
  }
  return (
    <SelectFiltersContainer>
      <div className="title">{props.title}</div>
      <div className="filters">{getButtons(props.options)}</div>
    </SelectFiltersContainer>
  );
};

export default SelectFilter;
