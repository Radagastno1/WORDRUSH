import "./Score.css";
import { useWordContext } from "./contexts/WordContext";

export default function Level() {
  const { level } = useWordContext();

  return (
    <div className="score-container">
      <div className="score">Level {level}</div>
    </div>
  );
}
