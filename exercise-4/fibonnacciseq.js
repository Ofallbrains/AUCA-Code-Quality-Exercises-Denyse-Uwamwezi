function fibonacci(n) {
  const sequence = [0, 1];
  // Also leave a comment her
  const sumOfTheLast2PreviousNumbers = sequence[sequence.length - 1] + sequence[sequence.length - 2]
  
  while (sumOfTheLast2PreviousNumbers <= n) {
    sequence.push(sumOfTheLast2PreviousNumbers);
  }
  return sequence.filter(num => num <= n);
}

console.log(fibonacci(21));
