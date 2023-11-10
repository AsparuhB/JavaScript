function rounding(num, dec) {
  if (dec > 15) {
    dec = 15;
    console.log(parseFloat(num.toFixed(dec)));
  } else {
    console.log(parseFloat(num.toFixed(dec)));
  }
}

rounding(3.1415926535897932384626433832795,2);
