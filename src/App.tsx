import React from "react";
import "./App.css";
import FallingObjectsSketch2 from "./FallingObjects2";
import InputWord from "./InputWord";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="centered-content">
        <FallingObjectsSketch2 />
        <InputWord />
      </div>
    </div>
  );
};

export default App;
