function permute(nums) {
  function recurse(output, current, numSet) {
    if (numSet.size == 0) {
      output.push([...current]);
      return;
    }
    for (const num of nums) {
      if (!numSet.has(num)) continue;
      current.push(num);
      numSet.delete(num);
      recurse(output, current, numSet);
      current.pop();
      numSet.add(num);
    }
    return output;
  }
  return recurse([], [], new Set(nums));
}

if (process.argv.length !== 3) {
  console.warn("Usage: node solution.js int,int,...,int");
  process.exit(1);
}

input = process.argv[2].split(",").map(Number);

for (const n of input) {
  if (Number.isNaN(n)) {
    console.warn("Usage: node solution.js int,int,...,int");
    process.exit(1);
  }
}

console.log(permute(input));
