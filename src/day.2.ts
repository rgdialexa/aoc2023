import fs from "fs";

function parseInput() {
  return fs
    .readFileSync("src/day.2.input.txt")
    .toString()
    .split("\n")
    .filter((x) => x)
    .map((x) => x);
}

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

export function part1() {
  const inputs = parseInput();
  let possibleGameTotal = 0;
  for (const input of inputs) {
    const gameNumberRoundsSplit = input.split(": ");
    const gameNumberBlock = gameNumberRoundsSplit[0];
    const roundsBlock = gameNumberRoundsSplit[1];
    const gameNumber = +gameNumberBlock.split(" ")[1];
    const rounds = roundsBlock.split("; ");
    let isImpossibleGame = false;
    for (const round of rounds) {
      const colorSplit = round.split(", ");
      const blueFilter = colorSplit.filter((x) => x.endsWith("blue"));
      const blueCount = blueFilter[0] ? +blueFilter[0].split(" ")[0] : 0;
      const redFilter = colorSplit.filter((x) => x.endsWith("red"));
      const redCount = redFilter[0] ? +redFilter[0].split(" ")[0] : 0;
      const greenFilter = colorSplit.filter((x) => x.endsWith("green"));
      const greenCount = greenFilter[0] ? +greenFilter[0].split(" ")[0] : 0;
      if (blueCount > MAX_BLUE) {
        isImpossibleGame = true;
        break;
      }
      if (redCount > MAX_RED) {
        isImpossibleGame = true;
        break;
      }
      if (greenCount > MAX_GREEN) {
        isImpossibleGame = true;
        break;
      }
    }

    possibleGameTotal += isImpossibleGame ? 0 : gameNumber;
  }

  return possibleGameTotal;
}

export function part2() {
  const inputs = parseInput();
  let powerTotal = 0;
  for (const input of inputs) {
    const gameNumberRoundsSplit = input.split(": ");
    const gameNumberBlock = gameNumberRoundsSplit[0];
    const roundsBlock = gameNumberRoundsSplit[1];
    const gameNumber = +gameNumberBlock.split(" ")[1];
    const rounds = roundsBlock.split("; ");
    let maxBlue = 0;
    let maxGreen = 0;
    let maxRed = 0;
    for (const round of rounds) {
      const colorSplit = round.split(", ");
      const blueFilter = colorSplit.filter((x) => x.endsWith("blue"));
      const blueCount = blueFilter[0] ? +blueFilter[0].split(" ")[0] : 0;
      const redFilter = colorSplit.filter((x) => x.endsWith("red"));
      const redCount = redFilter[0] ? +redFilter[0].split(" ")[0] : 0;
      const greenFilter = colorSplit.filter((x) => x.endsWith("green"));
      const greenCount = greenFilter[0] ? +greenFilter[0].split(" ")[0] : 0;
      maxBlue = blueCount > maxBlue ? blueCount : maxBlue;
      maxRed = redCount > maxRed ? redCount : maxRed;
      maxGreen = greenCount > maxGreen ? greenCount : maxGreen;
    }
    powerTotal += maxBlue * maxGreen * maxRed;
  }

  return powerTotal;
}
