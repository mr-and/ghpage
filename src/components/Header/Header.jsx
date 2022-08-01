import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="greetingMsg" id={props.load ? "no-scroll" : "scroll" }>
        Hello! I'm Andrew
        <p>A software developer with passion for learning and creating</p>
      </div>
    </>
  );
}
