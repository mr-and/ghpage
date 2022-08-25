import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import CV from "./pages/CV/CV";
import Books from "./pages/Books/Books";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/books" element={<Books />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  fontSize: "404px",
                  fontWeight: "404",
                  display: "flex",
                  color: "white",
                  justifyContent: "center",
                }}
              >
                404
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
