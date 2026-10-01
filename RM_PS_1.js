// 1 solveMeFirst
const solveMeFirst = (a, b) => {
  const result = a + b;
  return result;
};

// 2 Multiply
const Multiply = (a, b) => {
  const result = a * b;
  return result;
};

// 3 Even or Odd
const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  }
  return "odd";
};

// 4 makeNegative
const makeNegative = (number) => {
  return -Math.abs(number);
};

// 5 opposite
const opposite = (number) => {
  return -number;
};

// 6 simpleArraySum
const simpleArraySum = (ar) => {
  let sum = 0;
  for (const num of ar) {
    sum = sum + num;
  }
  return sum;
};

// 7 sleepIn
const sleepIn = (weekday, vacation) => {
  if (!weekday || vacation) {
    return true;
  }

  return false;
};

// 8 monkeyTrouble
const monkeyTrouble = (asmile, bsmile) => {
  if ((asmile && bsmile) || (!asmile && !bsmile)) {
    return true;
  }

  return false;
};

// 9 sumDouble
const sumDouble = (a, b) => {
  if (a === b) {
    return a + b * 2;
  }
  return a + b;
};


// 10 diff21
const diff21 = (n) => {
  const diff = n - 21;
  const absDiff = Math.abs(diff);
  if (n > 21) {
    return absDiff * 2;
  }
  return absDiff;
};