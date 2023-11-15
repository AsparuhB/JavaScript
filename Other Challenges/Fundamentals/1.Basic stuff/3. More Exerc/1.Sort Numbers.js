function sortNumbers(a, b, c) {
  let numbers = [a, b, c];
  numbers.sort((x, y) => y - x);
  num1 = numbers.pop()
  num2 = numbers.pop()
  num3 = numbers.pop()
  console.log(num3)
  console.log(num2)
  console.log(num1)
}

sortNumbers(2, 1, 3)