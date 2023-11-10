// using if, else if

// function countryLanguage(country) {
//   if (country === "USA" || country === "England") {
//     console.log(`English`);
//   } else if (
//     country === "Spain" ||
//     country === "Argentina" ||
//     country === "Mexico"
//   ) {
//     console.log(`Spanish`);
//   } else {
//     console.log("unknown");
//   }
// }

// using switch cases.
function countryLanguage(country) {
  switch (country) {
    case "USA":
      console.log("English");
      break;
    case "England":
      console.log("English");
      break;
    case "Argentina":
      console.log("Spanish");
      break;
    case "Spain":
      console.log("Spanish");
      break;
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}

countryLanguage("Bulgaria");
