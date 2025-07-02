"use strict";
// tsc --watch  // for auto file changes in js file 
// var a = 12;
// types
// primitive reference
// Basic types
// number , String , Boolean
// arrays , tuples
// Any , Unknown , Never, Void
// Enums
// unknown
// Use **any** when you want no type checking — but it's risky.
// Use **unknown** when the type is dynamic, but you still want safety.
// unknown is the right choice — especially when working with dynamic input such as JSON from an API, user input, or a third-party library.
// Why Use unknown Here?
// JSON.parse returns any by default, which is unsafe.
// Changing its return type to unknown forces you to check types manually, avoiding runtime errors.
// function handleInput(input: unknown) {
//   if (typeof input === "string") {
//     console.log("Uppercase:", input.toUpperCase());
//   } else if (typeof input === "number") {
//     console.log("Fixed:", input.toFixed(2));
//   } else {
//     console.log("Unknown input type.");
//   }
// }
// handleInput("hello");
// handleInput(42);
// handleInput(true); // "Unknown input type."
// never = it means it will never returns anything like in this it will infinitly print but never return
// any thing  -- in short this function will never return any thing everrr
// function abcd() : never {
//     while(true){
//          console.log("infinite run");
//     }
// }
// abcd()
// number - function that will return number
// function abc() : number {
//     return 12;
// }
// console.log(abc());
// void : means this function will not return anything
// function abc(): void {
//   console.log("hello");
// }
// abc();
// Enums
// let upDirection = "Up";
// let DownDirection = "Down";
// let LEFTDirection = "LEFT";
// let RIGHTDirection = "RIGHT";
// now we can group this all
// enum Direction {
//   upDirection = "UP",
//   DownDirection = "Down",
//   LEFTDirection = "LEFT",
//   RIGHTDirection = "RIGHT",
// }
// console.log(Direction.DownDirection);
// enum MousePosition {
//     x = 0,
//     y = 0
// }
//  MousePosition.x  // OR
//  MousePosition.y 
// let arr: [number, string] = [1, 2, 3, 4, "harsh"];
// let names: string[] = ["Alice", "Bob"];
// let numbers: number[] = [10,20,30];
// console.log(typeof names);
// interface User{
//     name : string,
//     rno : number
// }
// let User : User = {
//     name : "priyanshi",
//     rno : 12
// }
// console.log(User);
// type Address = {
//   city: string;
//   zip: string;
// };
// type User = {
//   name: string;
//   address: Address;
// };
// const user: User = {
//   name: "Dave",
//   address: {
//     city: "New York",
//     zip: "10001"
//   }
// };
// interface Address {
//   city: string;
//   hnumber: number;
// }
// interface EmpDetails {
//   ename: string;
//   eno: number;
//   address: Address;
// }
// const user: EmpDetails = {
//   ename: "Hello",
//   eno: 12,
//   address: {
//     city: "surat",
//     hnumber : 12
//   },
// };
// console.log(user);
