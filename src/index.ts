export {};

// EXAMPLE 1 - Set a Variable's value if it's Null or Undefined in TypeScript

let role: string | null | undefined = null;

role ??= 'developer';
console.log(role); // 👉️ "developer"

// ---------------------------------------------------

// // EXAMPLE 2 - Set a default value if Null or Undefined in TypeScript

// let role: string | null | undefined = null;

// role = role ?? 'developer';
// console.log(role); // 👉️ "developer"

// ---------------------------------------------------

// // EXAMPLE 3 - Set a default value if Null or Undefined using the ternary operator

// let role: string | null | undefined = undefined;

// role = role == null ? 'tester' : role;
// console.log(role); // 👉️ "tester"

// ---------------------------------------------------

// // EXAMPLE 4 - Set default value to variable if it's Null or undefined using `if`

// let myVar: string | null | undefined = undefined;

// if (myVar === undefined || myVar === null) {
//   myVar = 'updated value';
// }

// // 👇️ "updated value"
// console.log(myVar);

// ---------------------------------------------------

// // EXAMPLE 5 - Set a default value if Null or Undefined using logical OR (||)

// const role: string | null = null;

// const result = role || 'designer';
// console.log(result); // 👉️ "designer"
