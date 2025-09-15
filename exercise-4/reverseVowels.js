function reverseVowels(str) {
  const vowels = (str.match(/[aeoiu]/gi) || [])
  return str.replace(/[aeoiu]/ig, () => vowels.pop())
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('material'))