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

console.log(greaterNum(10, 7));
console.log(greaterNum(1.14, 1.14));
console.log(greaterNum("21", 21));
console.log(greaterNum("21", "21"));
