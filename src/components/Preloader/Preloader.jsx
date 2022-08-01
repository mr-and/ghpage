import React from "react";

import "./Preloader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} />
  );
}

export default Preloader;