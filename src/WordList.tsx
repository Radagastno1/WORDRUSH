import "./WordList.css";
import { useWordContext } from "./contexts/WordContext";

export default function WordList() {
  const { wordList } = useWordContext();

  return (
    <div className="word-list">
      <h2>Hittade ord</h2>
      <ul>
        {wordList.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
