import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IsAWordLevel } from "../levels";

interface WordContextProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  fallingLetters: string[];
  setFallingLetters: React.Dispatch<React.SetStateAction<string[]>>;
  checkLettersInScreen: () => void;
  isCorrectInput: boolean;
  wordList: string[];
  scores: number;
  setScores: React.Dispatch<React.SetStateAction<number>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  levelUp: boolean;
  setLevelUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const WordContext = createContext<WordContextProps | undefined>(undefined);

interface WordProviderProps {
  children: ReactNode;
}

const WordProvider: React.FC<WordProviderProps> = ({ children }) => {
  const [input, setInput] = useState<string>("");
  const [fallingLetters, setFallingLetters] = useState<string[]>([]);
  const [isCorrectInput, setIsCorrectInput] = useState(false);
  const [wordList, setWordlist] = useState<string[]>([]);
  const [scores, setScores] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [levelUp, setLevelUp] = useState(false);

  const setScoresByWordLength = () => {
    setScores(input.length * 5 + scores);
  };

  const checkLettersInScreen = () => {
    setIsCorrectInput(false);
    console.log("INPUT: ", input);
    const allLettersInArray = input
      .split("")
      .every((letter) => fallingLetters.includes(letter));

    console.log("Letters in screen:", fallingLetters);
    console.log("matchingletters:", allLettersInArray);
    if (
      allLettersInArray &&
      !wordList.some((word) => word == input) &&
      input != "" &&
      IsAWordLevel(input, level)
    ) {
      setScoresByWordLength();
      setIsCorrectInput(true);
      setWordlist((prevList) => prevList.concat([input]));
    }
  };

  useEffect(() => {
    if (fallingLetters.length === 0 && level === 1 && scores > 25) {
      setLevel((prevLevel) => prevLevel + 1);
      setLevelUp(true);
    }
  }, [fallingLetters, scores, level]);

  const value: WordContextProps = {
    input,
    setInput,
    fallingLetters,
    setFallingLetters,
    checkLettersInScreen,
    isCorrectInput,
    wordList,
    scores,
    setScores,
    level,
    setLevel,
    levelUp,
    setLevelUp,
  };

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
};

const useWordContext = (): WordContextProps => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useWordContext must be used within a WordProvider");
  }
  return context;
};

export { WordProvider, useWordContext };
