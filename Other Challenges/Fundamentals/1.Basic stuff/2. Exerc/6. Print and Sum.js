function printAndSum(numBeginning, numEnd) {
  let sum = 0;
  let log = "";
  for (let i = numBeginning; i <= numEnd; i++) {
    log += i.toString();
    if (i !== numEnd) {
      log += " ";
    }
    sum += i;
  }
  console.log(log);
  console.log("Sum: " + sum);
}

printAndSum(50, 60);
