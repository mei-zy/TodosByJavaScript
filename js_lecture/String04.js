// 유효한팰린드롬
isPalindrome = str => {
  const palinstr = str.toLowerCase().replace(/[^a-z]/g, '');
  return palinstr === [...palinstr].reverse().join('');
};
console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false
