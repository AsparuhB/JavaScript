function readingPerDay(currBookPages, pagesPerHour, daysToRead) {
  let bookTime = currBookPages/pagesPerHour
  let hrsPerDay = bookTime/daysToRead

  console.log(hrsPerDay)
}

readingPerDay(432,
  15 ,
  4)