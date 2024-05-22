function isPalindrome(string) {
  // Start coding here
  const word = string.trim();
  return word === word.split("").reverse().join("");

}
//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false