function formatWithCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Examples
console.log(formatWithCommas(100000)); 
console.log(formatWithCommas(5678545)); 
console.log(formatWithCommas(-420902));  
