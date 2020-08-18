/**
 * 建立一個 Functional Component Banner
 */

import React from "react";

const Banner = (props) => {
  return (
    <div>
      <input type="text" onChange={props.clickCallback} value={props.name}></input>
    </div>
  );
};

export default Banner;
