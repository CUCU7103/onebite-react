// 1. falsy 한 값
// javaScript의 모든 값은 truthy 하거나 falsy 합니다.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = 0n; // biginteger

if (!f2) {
  console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지의 Falsy한 값들을 제외한 모든 값들은 truthy한 값이다.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};
// ......

// 3. 활용사례

// function printName(person) {
//   if (person === undefined || person === null) {
//     console.log("person의 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "박준규" };
printName(person);
