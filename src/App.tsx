import React, { useEffect, useState } from "react";
import "./App.css";
import FallingObjectsSketch2 from "./FallingObjects2";
import InputWord from "./InputWord";
import Level from "./Level";
import { useWordContext } from "./contexts/WordContext";

const App: React.FC = () => {
  const [showLevel, setShowLevel] = useState(false);
  const { levelUp } = useWordContext();

  useEffect(() => {
    setShowLevel(true);
    console.log("levelup: ", levelUp);
    const timeoutId = setTimeout(() => {
      setShowLevel(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [levelUp]);

  return (
    <div className="container">
      {showLevel ? (
        <div className="centered-content">
          <Level />
        </div>
      ) : (
        <div className="centered-content">
          <FallingObjectsSketch2 />
          <InputWord />
        </div>
      )}
    </div>
  );
};

export default App;
