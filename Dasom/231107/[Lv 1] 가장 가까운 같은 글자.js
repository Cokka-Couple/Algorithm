function solution(s) {
  const result = new Array(s.length).fill(-1);
  for (let i = s.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (s[i] === s[j]) {
        result[i] = i - j;
        break;
      }
    }
  }
  return result;
}
