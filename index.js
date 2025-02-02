/**
 * Write a program that prints out the numbers 1 to 100 (inclusive).
 * If the number is divisible by 3, print _Crackle_ instead of the number.
 * If it's divisible by 5, print _Pop_.
 * If it's divisible by both 3 and 5, print _CracklePop_. You can use any language.
 */

function cp(min, max) {
  for (let i = min; i <= max; i++) {
    const f3 = i % 3 === 0;
    const f5 = i % 5 === 0;
    if (f3 && f5) {
      console.log("CracklePop");
    } else if (f3) {
      console.log("Crackle");
    } else if (f5) {
      console.log("Pop");
    } else {
      console.log(i);
    }
  }
}

cp(1, 100);
