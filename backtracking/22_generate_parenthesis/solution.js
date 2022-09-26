function generateParenthesis(n) {
  const current = [],
    output = [];
  function recurse(n, open) {
    if (n === 0 && open === 0) {
      output.push(current.join(""));
      return output;
    }
    if (open > 0) {
      current.push(")");
      recurse(n, open - 1);
      current.pop();
    }
    if (n > 0) {
      current.push("(");
      recurse(n - 1, open + 1);
      current.pop();
    }
    return output;
  }
  return recurse(n, 0);
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter n: ", (ans) => {
  const num = parseInt(ans);
  if (isNaN(num)) {
    console.warn("Invalid integer");
    process.exit(1);
  }
  const output = generateParenthesis(num);
  console.log(output);
  rl.close();
});
