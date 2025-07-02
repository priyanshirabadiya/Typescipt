// inference = means guess by it self like if we don't provide any type at that time it automatically consider its type

// let a = 22;
// let b = "sdf";
// let c = true;

// union & intersection types

// let sname : string | null;
// sname.   it will show all methods of string and null

// function abcd(variable: string | number): string | number {
//   if (typeof variable === "number") {
//     return Number(variable.toFixed(2));
//   } else {
//     return variable.toLocaleUpperCase();
//   }
// }

// console.log(abcd(121));
// console.log(abcd(121.12));
// console.log(abcd("Hello"));

// intersection

// sign &

// let a:number

// type Classment = {
//     section : string
// }

// type Student = {
//     name : string
// }

// type classsmentstud = Classment & Student;

// let ayu:classsmentstud = {
//     name : "harsh",
//     section : "sdfsdf"
// }

// type in ts

// primitive types

// type stringtype = {
//     sname : string
// }

// let User:stringtype = {
//     sname : "sdfsdf"
// }

// console.log(User);

// class

// class Airpods{
//     price = 100;
//     image = "image/airpoad";
//     color = "white";

//     playMusic(){
//         console.log("Music playing...");
//     }
// }

// type Data = string | null;

// class pendrive{
//     company = "hp";
//     price = 12;
//     data : Data = null;

//     putData(data : Data){
//         console.log(`this is put data ${data}`);
//         this.data = data;
//     }

//     getData(){
//         console.log(this.data);
//     }
// }

// let obj1 = new pendrive();

// obj1.putData("12");
// obj1.getData();

// extends classes

// class Food {
//   price = 100;

//   eat() {
//     console.log("eatting food");
//   }
// }

// class Mithai extends Food{
//     name = "rose balls";
// }

// let obj1 = new Mithai();
// obj1.eat()
// console.log(obj1.name);

// constructor = in this example to give multiple names

// class pendrive {
//   public company: string;

//   constructor() {
//     this.company = "hp";
//   }
// }

// class pendrive {
//   public comapany: string;
//   constructor(name: string) {
//     console.log((this.comapany = name));
//   }
// }

// let obj1 = new pendrive("hp");
// let obj2 = new pendrive("saddisk");

// access modifiers

// private = which we cannot access out of the class
// public = which we can access in entire the class and out of the class also via instance(by creating object as cpp)

// this code can run in javascript can not run in typescript
// class User {
//     private balance = 1200;
//     getBalance(){
//         console.log(this.balance);
//     }
// }

// let ui = new User();
// ui.balance = 1500;
// console.log(ui.balance);

// protected = which we can only use it in its child or inherited class we cannot use it in out of the class via instance

// class User {
//     protected balance = 1200;
// }

// class Admin extends User{
//     private isAdmin = true;
//     getBalance(){
//         console.log(this.balance);
//     }
// }

// let a1 = new Admin();

// readonly

// class abc {
//   constructor(public readonly name: string) {
//     this.name = name;
//   }
//   getName() {
//     console.log(this.name);
//   }
//   // we cannot reset it
//   //   setName() {
//   //     this.name = name;
//   //   }
// }

// let a1 = new abc("priyanshi");
// a1.getName();

// function return type whenever function return anything it should show its return type

// class abc {
//   constructor(public username: string) {
//     this.username = username;
//   }
//   getname(): string {
//     return this.username;
//   }
// }

// let a1 = new abc("hello")
// console.log(a1.getname());


// let stringlitrals : "hr" | 12 | true;

// console.log(stringlitrals = "hr");
// console.log(stringlitrals = 12);
// console.log(stringlitrals = true);



// type A = { name: string };
// type B = { age: number };
// type d = { gender: number };

// type C = A & B & d;  // C = { name: string; age: number }

// const person: C = {
//   name: "Alice",
//   age: 30,
//   gender : 1
// };

// console.log(person);
