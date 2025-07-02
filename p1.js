"use strict";
// let message : string = "sdfhkshdfkj";
// console.log(message);
// let myString;
// myString = 'Hello from ts';
// console.log(myString);
// let num1:number = 2589.30;
// let val:string = num1.toExponential();
// console.log(typeof num1);
// let variable: null = null;
// variable = null;
// // Returns object
// console.log(typeof variable);
// // True
// console.log(variable == null);
// // True
// console.log(variable == undefined);
// // True
// console.log(null == undefined);
// // False
// console.log(variable === undefined);
// // False
// console.log(null === undefined);
// interface User{
//     username : string,
//     email : string,
// }
// const newUser = {
//     username : "priyanshi",
//     rno : 12
// }
// console.log(`${newUser.username} rno is ${newUser.rno}`);
// interface product {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
// }
// const item: product = {
//     id: 12,
//     name: "jguhgh",
//     price: 1245.32
//     // description: ""
// };
// console.log(`${item.id} and ${item.name}  and ${item.price} and ${item.description}`);
// enum data{
//     name = "priyanshi",
//     rno = 78,
//     fname = "ashdfj"
// };
// console.log(data);
// tuple
// const arrtuble: [number , string , string] = [12,"sdfh","sdfgdf"];
// console.log(arrtuble);
// var new_array: any[] = [1,"sdf"];
// new_array.push(20);
// new_array.push("ert");
// new_array.push("4345");
// console.log(new_array);
// Arrays-----------
// let fruits: string[] = ["sdf","sdf"]
// console.log(fruits);
// let values:(string | number)[] = ['apple' , 2 , 'sdfg' ,5];
// let values: Array = ['sdf',2,'sdfsdf'];
// console.log(values);
// let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// let values: Array<any> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// console.log(values);
// let myArray:number[][] = [[10,20,30],[40,50,60]];
// console.log(myArray[0][0]);
// Initializing an Array by using the Array object.  
// let arr: string[] = new Array("sdf", "sdf", "4", "sdfsdf");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let arr: string[] = new Array("sdf", "sdf", "rtyi", "rty");
// function myFun(dis_arr: string[]) {
//     for (let i = 0; i < dis_arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// myFun(arr);
// let val: unknown;
// val = "75742sdfsdf";
// console.log(typeof val);
// console.log(val); 
// val = true; 
// console.log(val); 
// val = 7; 
// console.log(val); 
// val = "geeks for geeks"; 
// console.log(val); 
// val = [1, 2, 3, 4]; 
// console.log(val); 
// val = { name: "rachel" }; 
// console.log(val); 
// val = parseInt(Math.random() * 10); 
// val = Math.floor(Math.random() * 10);
// console.log(val); 
// val = null; 
// console.log(val); 
// val = undefined; 
// console.log(val); 
// let a: unknown;
// console.log(a);
// let b: unknown = 10;
// console.log(b);
// let c: any = b;
// console.log(c); 
// let unknown_val: string[] = ["sdf","wer","gyfgh"]; 
// let splitString = unknown_val.join("").split(""); 
// console.log(unknown_val); 
// let variablew3: void = null; 
// let variable1: never = null;	 // error 
// let variable2: never = 1;		 // error 
// let variable3: never = "geek";	 // error 
// let variable4: never = true;	 // error
// function greet(): never {
//     while (true) {
//         console.log("hello");
//     }
// }
// greet();
// function displayType(geeks: (string | number)) {
//     if (typeof geeks === "number") {
//         console.log("its number");
//     }
//     else {
//         console.log("it's string");
//     }
// }
// displayType(45645);
// A new type is created
// type type_alias = number | string | boolean;
// // Variable is declared of the new type created
// let variable: type_alias;
// variable = 1; 
// console.log(variable);
// variable = "geeksforgeeks";
// console.log(variable);
// variable = true;
// console.log(variable);
// type alias_val = number | string | boolean;
// let variable : alias_val;
// variable = 1;
// console.log(variable);
// variable = "sdgsd";
// console.log(variable);
// let value: any = "This is a string";
// let len : number = (value as string).length;
// // let lengthOfString: number = (value as string).length;
// console.log(len);
// let a :any;
// let b :unknown;
// a.whatever();
// // b.whatever();
// type Pet = {
//     name: string;
//     walk: () => void;
// };
// type Fish = {
//     name: string;
//     swim: () => void;
// };
// let myPet: Pet | Fish = { name: 'Goldie', swim: () => console.log('Swimming') };
// (myPet as Fish).swim();
// interface User{
//     name : string
// }
// const newUser:User = {
//     name : "sdfdf"
// }
// console.log(newUser.name);
