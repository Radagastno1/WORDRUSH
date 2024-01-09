import React, { ReactNode, createContext, useContext, useState } from "react";
import { IsAWordLevel1 } from "../levels";

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
      IsAWordLevel1(input)
    ) {
      setScoresByWordLength();
      setIsCorrectInput(true);
      setWordlist((prevList) => prevList.concat([input]));
    }
  };

  //   useEffect(() => {
  //     checkLettersInScreen();
  //   }, [fallingLetters]);

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
