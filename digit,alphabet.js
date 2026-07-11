let ch = "48";

if (ch.length != 1) {
  console.log("Please give only a single character");
} else {
  let ascii = ch.charCodeAt(0);

  if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
    console.log("Alphabet");
  } else if (ascii >= 48 && ascii <= 57) {
    console.log("Digit");
  } else {
    console.log("Special Symbol");
  }
}
