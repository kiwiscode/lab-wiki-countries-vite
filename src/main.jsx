// src/main.jsx
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "../src/pages/HomePage";
import CountryDetailsPage from "../src/pages/CountryDetailsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:countryId" element={<CountryDetailsPage />} />
    </Routes>
  </Router>
);
