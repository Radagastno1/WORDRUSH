import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface WordContextProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  fallingLetters: string[];
  setFallingLetters: React.Dispatch<React.SetStateAction<string[]>>;
  checkLettersInScreen: () => void;
  isCorrectInput: boolean;
}

const WordContext = createContext<WordContextProps | undefined>(undefined);

interface WordProviderProps {
  children: ReactNode;
}

const WordProvider: React.FC<WordProviderProps> = ({ children }) => {
  const [input, setInput] = useState<string>("");
  const [fallingLetters, setFallingLetters] = useState<string[]>([]);
  const [isCorrectInput, setIsCorrectInput] = useState(false);

  const checkLettersInScreen = () => {
    setIsCorrectInput(false);
    const allLettersInArray = input
      .split("")
      .every((letter) => fallingLetters.includes(letter));

    console.log("Letters in screen:", fallingLetters);
    console.log("matchingletters:", allLettersInArray);
    if (allLettersInArray) {
      setIsCorrectInput(true);
    }
  };

  useEffect(() => {
    checkLettersInScreen();
  }, [fallingLetters]);

  const value: WordContextProps = {
    input,
    setInput,
    fallingLetters,
    setFallingLetters,
    checkLettersInScreen,
    isCorrectInput,
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