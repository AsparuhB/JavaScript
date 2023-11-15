function centuriesToMinutes(century) {
  let years = century * 100;
  let days = Math.floor(years * 365.2422);
  let hours = Math.floor(days * 24);
  let minutes = Math.floor(hours * 60);

  console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}

centuriesToMinutes(5)