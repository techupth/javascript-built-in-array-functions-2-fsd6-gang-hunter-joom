function isPalindrome(string) {
  // Start coding here
  let reverseString = string.split("").reverse().join("");
  return string===reverseString
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

//ตรวจสอบคำว่าเป็นคำที่ย้อนกลับได้หรือไม่
//
//