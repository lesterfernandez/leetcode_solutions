function letterCasePermutation(s) {
  const strings = [];

  const currentWord = [];
  function recurse(i) {
    if (i === s.length) {
      const word = currentWord.join("");
      strings.push(word);
    } else if (
      s.charCodeAt(i) >= "A".charCodeAt(0) &&
      s.charCodeAt(i) <= "z".charCodeAt(0)
    ) {
      currentWord.push(s[i].toLowerCase());
      recurse(i + 1);
      currentWord.pop();
      currentWord.push(s[i].toUpperCase());
      recurse(i + 1);
      currentWord.pop();
    } else {
      currentWord.push(s[i]);
      recurse(i + 1);
      currentWord.pop();
    }
  }

  recurse(0);
  return strings;
}

if (process.argv.length !== 3) {
  console.warn("Usage: node solution.js {string}");
  process.exit(1);
}

const word = process.argv[2];
const list = letterCasePermutation(word);
for (const entry of list) {
  console.log(entry);
}
