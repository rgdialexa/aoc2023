import fs from "fs";

function parseInput() {
  return fs
    .readFileSync("src/day.1.input.txt")
    .toString()
    .split("\n")
    .filter((x) => x)
    .map((x) => x);
}

export function part1() {
  const input = parseInput();
  let total = 0;
  for (const inputString of input) {
    total += formatStringFinal(inputString);
  }
  return total;
}

export function part2() {
  const input = parseInput();
  let total = 0;
  for (const inputString of input) {
    total += formatStringFinal(replaceNumberStrings(inputString));
  }
  return total;
}

function formatStringFinal(inputString: string) {
  const numbersOnly = inputString.replace(/\D/g, "");
  const onlyFirstAndLastNumber = `${numbersOnly[0]}${
    numbersOnly[numbersOnly.length - 1]
  }`;
  return +onlyFirstAndLastNumber;
}

function replaceNumberStrings(inputString: string) {
  inputString = inputString.split("one").join("one1one");
  inputString = inputString.split("two").join("two2two");
  inputString = inputString.split("three").join("three3three");
  inputString = inputString.split("four").join("four4four");
  inputString = inputString.split("five").join("five5five");
  inputString = inputString.split("six").join("six6six");
  inputString = inputString.split("seven").join("seven7seven");
  inputString = inputString.split("eight").join("eight8eight");
  inputString = inputString.split("nine").join("nine9nine");
  return inputString;
}
