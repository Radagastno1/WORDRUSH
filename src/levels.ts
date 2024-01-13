export const level1Letters: string[] = ["S", "O", "T"];

export function IsAWordLevel(word: string, level: number) {
  if (level == 1) {
    const possibleWords: string[] = [
      "SOT",
      "OS",
      "OST",
      "OT",
      "SO",
      "STO",
      "TO",
    ];
    if (possibleWords.includes(word)) {
      return true;
    }
    return false;
  } else if (level == 2) {
    const possibleWords: string[] = [
      "AR",
      "AK",
      "AL",
      "ALAR",
      "ALKA",
      "ARK",
      "ARLA",
      "KA",
      "KAL",
      "KALA",
      "KAR",
      "KARL",
      "KLAR",
      "KLARA",
      "LA",
      "LAK",
      "LAKA",
      "LAKAR",
    ];
    if (possibleWords.includes(word)) {
      return true;
    }
    return false;
  }
}
