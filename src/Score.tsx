import "./Score.css";

export default function Score() {
  const userScore = 42;

  return (
    <div className="score-container">
      <div className="score-header">Din Poäng</div>
      <div className="score">{userScore}</div>
    </div>
  );
}
