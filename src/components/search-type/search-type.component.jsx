import React from "react";

import "./search-type.style.css"

export const Selector = (props) => (
    <select
      className="form-control"
      onChange={props.selectorchangeHandeler}
      value={props.searchParameters}
    >
      {props.optionAttributes.map((option) => (
        <option key={option.key} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );