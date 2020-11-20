import React from "react";

export const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        placeholder="Type to search.."
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};
