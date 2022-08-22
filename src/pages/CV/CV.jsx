import React from "react";
import { useState, useEffect } from "react";

import resume from "../../assets/blank_cv.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./CV.css";

function CV() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resumeBox">
      <div className="resumeContainer">
        <Document file={resume} className="resume">
          <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
        </Document>
        <button
          href={resume}
          target="_blank"
        >
          <a href={resume} download>Download</a>
        </button>
      </div>
    </div>
  );
}

export default CV;
