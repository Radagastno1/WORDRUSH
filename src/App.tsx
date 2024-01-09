import React from "react";
import "./App.css";
import FallingObjectsSketch2 from "./FallingObjects2";
import InputWord from "./InputWord";
import Score from "./Score";
import WordList from "./WordList";
import { WordProvider } from "./contexts/WordContext";

const App: React.FC = () => {
  return (
    <WordProvider>
      <div className="container">
        <WordList />
        <div className="centered-content">
          <Score />
          <FallingObjectsSketch2 />
          <InputWord />
        </div>
      </div>
    </WordProvider>
  );
};

export default App;
