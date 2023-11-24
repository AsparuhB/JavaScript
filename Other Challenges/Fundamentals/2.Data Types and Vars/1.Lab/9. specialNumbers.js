function isSpecial(num) {
  let sumOfDigits = 0;
  while (num) {
    sumOfDigits += num % 10;
    num = Math.floor(num / 10);
  }
  return sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
}

function printSpecialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (isSpecial(i)) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`)
    }
  }
}

printSpecialNumbers(15);
