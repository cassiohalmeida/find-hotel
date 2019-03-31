import React from "react";
import styled, { css } from "styled-components";
import { priceBetweenFilter, ratingFilter, distanceFilter } from "../selectors";

const SliderTitle = styled.div`
  i {
    color: #797979;
    margin-right: 10px;
  }
`;

const Slider = styled.input`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background: transparent;
  outline: none;
  -webkit-appearance: none;
  margin: 0;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 3px solid #2796e9;
    background: #ffffff;
    cursor: pointer;
    margin-top: -0.625em;
  }
  ::-webkit-slider-runnable-track {
    box-sizing: border-box;
    border: none;
    height: 4px;
    background: linear-gradient(#2794e7, #2794e7) 0 / var(--sx) 100% no-repeat
      #ccc;
  }
`;

const SliderOutput = styled.div`
  display: block;
  position: absolute;
  transform: translate(
    calc((var(--val) - var(--min)) / (var(--max) - var(--min)) * 24em - 15%)
  );
`;

const SliderContainer = styled.div`
  --color: ${props => props.color};
  --val: ${props => props.val};
  --min: ${props => props.min};
  --max: ${props => props.max};
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * 1.5em + var(--ratio) * (100% - 1.5em));
  position: relative;
  height: 130px;
  padding-top: 30px;
`;

const SliderFilter = props => {
  let icon;
  let outputLabel;
  switch (props.type) {
    case "money":
      icon = <i className="fas fa-euro-sign" />;
      outputLabel = "€" + props.defaultValue;
      break;
    case "rating":
      icon = <i className="far fa-smile" />;
      outputLabel = props.defaultValue;
      break;
    case "distance":
      icon = <i className="fas fa-location-arrow" />;
      outputLabel = props.defaultValue + "km";
      break;
    default:
      icon = "";
  }
  const dataListFilter = () => {
    const result = [];

    if (props.type === "money") {
      for (let i = props.min; i <= props.max; i = i + props.step) {
        let size = props.data.filter(hotel => {
          let minPrice = i - props.step;
          let maxPrice = i;
          return priceBetweenFilter(hotel, minPrice, maxPrice);
        });
        result.push({
          value: i,
          qty: size.length
        });
      }
    } else {
      for (let i = props.min; i <= props.max; i++) {
        let size = props.data.filter(hotel => {
          if (props.type == 'rating') {
            return Math.trunc(hotel.review_rating.rating) == i;
          }
          return distanceFilter(hotel, i);
        });
        result.push({
          value: i,
          qty: size.length
        });
      }
    }
    console.log(result);
    return result;
  };
  return (
    <div>
      <SliderTitle>
        {icon}
        {props.title}
      </SliderTitle>
      <SliderContainer val={props.defaultValue} min={props.min} max={props.max}>
        <SliderOutput htmlFor={props.id}>{outputLabel}</SliderOutput>
        <div style={{ marginTop: 30 + "px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${props.max / props.step}, 1fr)`,
              alignItems: "baseline"
            }}
          >
            {dataListFilter().map(hotel => (
              <div
                key={hotel._id}
                style={{
                  width: 100 + "%",
                  height: hotel.qty + "px",
                  backgroundColor: "#e5e5e5"
                }}
              />
            ))}
          </div>
          <div style={{ marginTop: -15 + "px" }}>
            <Slider
              type="range"
              defaultValue={props.defaultValue}
              min={props.min}
              max={props.max}
              step={props.step}
              onInput={e => {
                props.onInput(e.target.value);
              }}
              className="slider"
              id={props.id}
              style={{
                "--min": props.min,
                "--max": props.max,
                "--val": props.defaultValue
              }}
            />
          </div>
        </div>
      </SliderContainer>
    </div>
  );
};

export default SliderFilter;
