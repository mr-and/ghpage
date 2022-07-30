import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Books from "./pages/Books/Books";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<Books />} />
      <Route
        path="*"
        element={
          <div style={{ 
            fontSize: "404px",
            fontWeight: "404", 
            display: "flex",
            color: "dark", 
            justifyContent: "center" }}
          >404</div>
        }
      />
    </Routes>
  </Router>
);