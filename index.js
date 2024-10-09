//Q1
const multiplesOfSixAndNine = () => {
  for (i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};

//multiplesOfSixAndNine();

//Q2
const greaterNum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    if (a === b) {
      return "both inegers are equal";
    } else if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return null;
  }
};

//console.log(greaterNum(10, 7));
//console.log(greaterNum(1.14, 1.14));
//console.log(greaterNum("21", 21));
//console.log(greaterNum("21", "21"));

//Q3
const sumOfFourAndSix = () => {
  let s = 0;
  for (i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      s += i;
    }
  }
  return s;
};

//console.log(sumOfFourAndSix());

//Q4
const oddAndEvenToN = (n) => {
  let m = "";
  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      m = `${i} is even`;
    } else {
      m = `${i} is odd`;
    }
    console.log(m);
  }
};

//oddAndEvenToN(5);

//Q5
const sumOfNotDivisibleByTen = () => {
  let s = 0;
  for (i = 1; i <= 1000; i++) {
    if (i % 10 !== 0) {
      s += i;
    }
  }
  return s;
};

//console.log(sumOfNotDivisibleByTen());
