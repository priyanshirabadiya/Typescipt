// functionas in typescript

// function addtwo(a:number , b:number):number{
//     return a + b;
// }
// console.log(addtwo(10,20));

// Following function adds it's two parameters then
// returns it as string form in base 16
// function getHexAddition(a: number, b: number): string {
//     return a.toString(16);
// }

// console.log(getHexAddition(78, 16)); // logs '1a'

// function goodM(name?: string):string{
//     return "good morning" + name
// }

// console.log(goodM("sdfsdf"));

// function pow(base: number, power = 1): number {
//     return Math.pow(base, power);
// }

// function pow(base:number,power = 1):number{
//     return Math.pow(base,power);
// }

//  console.log(pow(7));    // logs 7
//  console.log(pow(7, 2)); // logs 49

// function overloading
// function addData(data1 : string, data2 : string) : string;
// function addData(data1 : number, data2 : number): number;
// function addData(data1 : any, data2 : any){
// 	return data1+ data2;
// }

// console.log(addData("Hello ", "GeeksforGeeks"));
// console.log(addData(20, 30));

// function addData(data1: number, data2: number): number;
// function addData(data1 : string, data2 : string): string;
// function addData(data1 : string, data2 : number): any;
// function addData(data1 : number, data2 : string): any;
// function addData(data1 : any, data2 : any):any {
//     return data1 + data2
// };
// console.log(addData(10,10));
// console.log(addData("sdfsd ","serter"));
// console.log(addData("sdfsd ",45));
// console.log(addData(45,"45"));

// class Data {
//     public displayData(data: string): number;
//     public displayData(data: number): string;
//     public displayData(data: any): any {
//         if (typeof (data) === 'number')
//             return data.toString();
//         if (typeof (data) === 'string')
//             return data.length;
//     }
// }

// let object = new Data();
// console.log("Result is : " + object.displayData(123456));
// let stringData = "GeeksforGeeks";
// console.log("Length of String " + stringData
//     + " is : " + object.displayData(stringData));

// let seearrowfun = (name : string):string =>{
//     return name;
// }

// console.log(seearrowfun("sdfasdf"));

// let multipledata = (name: string, id: number, marks: number[]):string => {
//     return `${name} + ${id} + ${marks}`
// }
// console.log(multipledata("asdfkhk",7,[10, 20, 30, 40]));

// toPrecision() method
// let num = new Number(6.2);
// console.log(num.toPrecision());
// console.log(num.toPrecision(4));
// console.log(num.toPrecision(3));

// toPrecision() method
// let myNumber: number = 32.5;
// console.log("Number Method: toPrecision()");
// console.log(myNumber.toPrecision(1));
// console.log(myNumber.toPrecision(3));

// let num1: number = 526.123;

// console.log(`num1.toFixed() is ${num1.toFixed()}`);
// console.log(`num1.toFixed(4) is ${num1.toFixed(4)}`);
// console.log(`num1.toFixed(7) is ${num1.toFixed(7)}`);

// const number: number = 432.3456;
// const formattedNumber: string = number.toLocaleString();
// console.log(typeof formattedNumber);

// const number: number = 23415.456;
// const formattedNumber: string = number.toLocaleString('en-US',
//     { style: 'currency', currency: 'USD' });
// console.log(formattedNumber);

// const number: number = 23415.456;
// const formattedNumber: string = number.toLocaleString('en-US',
//     { style: 'currency', currency: 'USD' });
// console.log(formattedNumber);

// let usnumber: number = 56241.78;
// let formattednum: string = usnumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// console.log(formattednum);

// The toString()function
// let Num1: number = 123;
// console.log(Num1.toString())
// console.log(Num1.toString(16));
// Num1.toString(8);
// Num1.toString(4);

// The toString() function
// let Num2: number = 12345;
// console.log("Number Method: toString()");
// console.log(Num2.toString());
// console.log(Num2.toString(4));

// import {addition} from './mathutill';

// console.log(addition(10,20));

// import { addition } from './add';

// console.log(addition(10, 20)); // Should print 30

// import { add, subtract } from './mathutill';
// const sum = add(5, 3);
// const difference = subtract(5, 3);

// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);

// Define a function that takes a string as input
// function greet(name: string): string {
//     return `Hello, ${name}!`;
//   }

//   // Call the function and store the result
//   const message: string = greet("World");

//   // Print the message to the console
//   console.log(message);

// let fname:string;
// let number:number;
// let checked:boolean;
// let first_name:string = "Hello from pr";

// let greet: string = "Greeting";
// let greeks : string = "Hello";
// console.log(greet +" : "+ greeks);

// let country : string = "India";
// console.log(country);

// let blockedscope:string = "Typescript";
// console.log(blockedscope);

// let employeeName:string = 'John age';
// console.log(employeeName);

// let carfeactures: { type: string; model: string; year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };

// let myobj: { name: string; age: number; work: string } = {
//   name: "priyanshi",
//   age: 41,
//   work: "engineer",
// };

// console.log(myobj);
