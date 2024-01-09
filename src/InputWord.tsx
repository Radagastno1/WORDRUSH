import { ChangeEvent } from "react";
import "./InputWord.css";
import { useWordContext } from "./contexts/WordContext";

export default function InputWord() {
  const { input, setInput, checkLettersInScreen, isCorrectInput } =
    useWordContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      checkLettersInScreen();
    }
  };

  // const handleButtonClick = () => {
  //   checkLettersInScreen();
  // };
  const borderColor = isCorrectInput ? "green" : "red";

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Skriv ditt ord här"
        style={{
          borderColor: borderColor,
          borderWidth: 10,
          textTransform: "uppercase",
        }}
      />
      {/* <button onClick={handleButtonClick}>GO</button> */}
    </div>
  );
}
