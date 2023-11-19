// console.log(5 + "5"); = 55
// console.log("Hello" - 1); = NaN
// console.log(1 == '1'); = true
// console.log(false || true); = true
// console.log([1, 2] + [3, 4]); = [1, 23, 4]
// console.log(typeof NaN); = number
// console.log(!"Hello"); = false

// function foo() {
//   return
//   {
//     message: "Hello"
//   };
// }
// console.log(foo()); = undefined

// console.log(parseInt("10.5")); = 10

// console.log(undefined + 1); // NaN

// // 11. Floating-Point Precision
// console.log(0.1 + 0.2 === 0.3); = false

// // 12. Global Object
// var a = 5;
// console.log(delete a); = false

// // 13. Truthy Assignment
// var b = 0;
// var a = b || 5;
// console.log(a); = 5

// // 14. Object Comparison
// console.log({} === {}); = false

// // 15. String Reversal
// console.log("JavaScript".split("").reverse().join("")); = tpircSavaJ

// // 16. Double NOT Operator
// console.log(!!"Hello"); = true

// // 17. Conditional Operator
// var x = 10;
// var y = (x > 5) ? "A" : "B";
// console.log(y); = A

// // 18. Truthy Object
// var obj = { 
//   valueOf: function() {
//     return 42;
//   }
// };
// console.log(obj == 42); = true

// // 19. Function Hoisting
// console.log(foo()); = 'Hello'
// function foo() {
//   return "Hello";
// }

// // 20. Arrow Function
// var multiply = x => x * x;
// console.log(multiply(5)); = 25
// console.log(null == undefined); == true === false

// function Animal() {}
// Animal.prototype.species = "Dog";
// var dog = new Animal();
// console.log(dog.species); = Dog

// var obj1 = { key: "value" };
// var obj2 = obj1;
// obj2.key = "new value";
// console.log(obj1.key); 

// var obj = { a: 1, b: { c: 2 } };
// console.log(JSON.stringify(obj));