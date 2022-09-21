if (process.argv.length !== 3) {
  console.log("Usage: permjs {string}");
  process.exit(2);
}
const word = process.argv[2];
printPermutations(word);

function printPermutations(word) {
  const charMap = new Map();
  for (const c of word) {
    charMap.set(c, (charMap.get(c) || 0) + 1);
  }
  const currentWord = new Array(word.length).fill("");

  function recurse() {
    // base case
    let charMapSum = 0;
    for (const val of charMap.values()) {
      charMapSum += val;
    }
    if (charMapSum === 0) {
      console.log(currentWord.join(""));
      return;
    }

    for (const [key, val] of charMap) {
      if (val === 0) continue;
      currentWord.push(key);
      charMap.set(key, val - 1);
      recurse();
      currentWord.pop();
      charMap.set(key, val);
    }
  }

  recurse();
}
