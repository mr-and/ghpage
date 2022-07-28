import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Books from './pages/Books/Books';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
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
                color: "white", 
                justifyContent: "center" }}
                >404</div>
      }
    />
      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
