function formatWithCommas(n) {

  // Instead of using raw RegEx, it's a common practice to opt into 3rd party libraries like zod.
  // Avoid regular expressions       👇
  return n.toString().replace(/\B(?=(\d{3})+(?!d))/g, ",");
}

// Examples
console.log(formatWithCommas(100000)); 
console.log(formatWithCommas(5678545)); 
console.log(formatWithCommas(-420902));  
