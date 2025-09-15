function getNestingLevel(arr) {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(getNestingLevel));
}

function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
  , []);
}

const nestedArr = [1, [2, [3, [4]], 5]];
console.log("Nesting Level:", getNestingLevel(nestedArr)); 
console.log("Flattened:", flattenArray(nestedArr)); 
