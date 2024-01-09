export const level1Letters: string[] = ["S", "O", "T"];

export function IsAWordLevel1(word: string) {
  const possibleWords: string[] = ["SOT", "OS", "OST", "OT", "SO", "STO", "TO"];
  if (possibleWords.includes(word)) {
    return true;
  }
  return false;
}
