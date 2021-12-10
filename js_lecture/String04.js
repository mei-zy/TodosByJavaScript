// 유효한팰린드롬
function isPalindrome(str) {
  const palinstr = str.toLowerCase().replace(/[^a-z]/g, "");
  const checkpalinstr = str
    .toLowerCase()
    .split("")
    .reverse()
    .join()
    .replace(/[^a-z]/g, "");
  console.log(palinstr === checkpalinstr);
}
isPalindrome("A man, a plan, a canal: Panama"); // => true
isPalindrome("race a car"); // => false
