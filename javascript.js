// console.log(018 == '018');
// console.log(017 == '017');

// explanation
// 017 is treated as an octal (base 8) number because it starts with 0 and contains only valid octal digits (0-7).
// 017 in octal is 15 in decimal.
// The string '017' is coerced into a number (17 in decimal).
// 15 == 17 → false.