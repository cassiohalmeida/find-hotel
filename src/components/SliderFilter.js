import React from 'react';
import styled, { css } from 'styled-components'

const SliderTitle = styled.div`
  i {
    color: #797979;
    margin-right: 10px;
  }
`
const SliderFilter = (props) => {
  let icon;
  switch(props.type) {
    case 'money':
      icon = <i className="fas fa-euro-sign"></i>
      break;
    case 'rating':
      icon = <i class="far fa-smile"></i>
      break;
    case 'distance':
      icon = <i class="fas fa-location-arrow"></i>
      break;
    default:
      icon = ''
  }
  return (
    <div>
      <SliderTitle>
        {icon}{props.title}
      </SliderTitle>
      <div>
          <input
            type="range"
            defaultValue={props.defaultValue}
            min={props.min}
            max={props.max}
            onInput={e => {
              props.onInput(e.target.value);
            }}
            className="slider"
            id={props.id}
          />
        </div>
    </div>
  )
}

export default SliderFilter;
