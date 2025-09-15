function reverseVowels(str) {
  const vowelsRegEx = /[aeoiu]/gi
  // Prefer to use .test() over match
  const vowels = (str.match(vowelsRegEx) || [])
  return str.replace(vowelsRegEx, () => vowels.pop())
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('material'))
