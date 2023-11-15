function rightPlace(word, char, trueWord) {
  let newWord = word.replace("_", char);
  let result = newWord === trueWord ? "Matched" : "Not Matched";
  console.log(result);
}

rightPlace("Str_ng", "i", "String");
