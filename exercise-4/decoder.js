function solution(roman) {
    const value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

  
  return roman.split('')
              .reduce((acc, cur, i, arr) => {
                return (i !== arr.length-1 && value[cur] < value[arr[i+1]])
                  ? acc - value[cur]
                  : acc + value[cur]
              }, 0)
}

console.log(solution("MDCLXVI"));