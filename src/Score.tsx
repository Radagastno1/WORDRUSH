import "./Score.css";
import { useWordContext } from "./contexts/WordContext";

export default function Score() {
  const { scores } = useWordContext();

  return (
    <div className="score-container">
      <div className="score-header">Scores</div>
      <div className="score">{scores}</div>
    </div>
  );
}
