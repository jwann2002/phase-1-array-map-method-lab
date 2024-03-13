// Array of tutorials
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Function to capitalize the first character of each word
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Array of special words
const specialWords = new Set(["OO", "API", "NaN", "StopPropagation", "PreventDefault", "JSONP"]);

// Function to capitalize each first character of each word in a sentence
// and then join the special words while preserving their format
function capitalizeFirstCharacterAndJoin(sentence) {
  // Split the sentence into words
  const words = sentence.split(/\s+/);

  // Capitalize the first character of each word
  const capitalizedWords = words.map(word => capitalizeFirstLetter(word));

  // Join the special words while preserving their format
  const joinedSpecialWords = capitalizedWords.map(word => specialWords.has(word.toUpperCase()) ? word : capitalizeFirstLetter(word)).join(" ");

  return joinedSpecialWords;
}

// Function to convert tutorials to title case
function titleCased() {
  return tutorials.map(title => capitalizeFirstCharacterAndJoin(title));
}

// Call the titleCased function
const titleCasedTutorials = titleCased();

// Output the title-cased tutorials
console.log(titleCasedTutorials);
