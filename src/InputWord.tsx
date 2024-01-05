import { ChangeEvent, useState } from "react";
import "./InputWord.css";

export default function InputWord() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {};

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
