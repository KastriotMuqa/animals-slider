import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnimalsSlider } from "./AnimalsSlider";
import { InformationSlider } from "./InformationSlider";

const Slider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/step1" element={<AnimalsSlider />} />
        <Route path="/step2" element={<InformationSlider />} />
        <Route path="/" element={<Navigate to="/step1" replace />} />{" "}
      </Routes>
    </Router>
  );
};

export default Slider;
