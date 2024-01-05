import { ChangeEvent } from "react";
import "./InputWord.css";
import { useWordContext } from "./contexts/WordContext";

export default function InputWord() {
  const { input, setInput, checkLettersInScreen } = useWordContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    checkLettersInScreen();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Skriv ditt ord här"
      />
      <button onClick={handleButtonClick}>GO</button>
    </div>
  );
}
