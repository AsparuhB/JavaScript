function convert(binaryNumber) {
  let decimal = 0;

  for (let i = binaryNumber.length; i >= 0; i--) {
      let bit = binaryNumber[i];
      if (bit === '1') {
          decimal += Math.pow(2, 7 - i);
      }
  }

  console.log(decimal);
}

convert(101)