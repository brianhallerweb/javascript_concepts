/////// Example 1 ////////
//Simply importing a module will run the code in that module
//But it will not make its functions or variables available.
import "./export";
console.log("code from import running...");

/////// Example 2 ////////
//Importing an exporting a named function
import { add } from "./export";
console.log(add(1, 1));

/////// Example 3 ////////
//Importing an exporting multiple named functions
import { add, square } from "./export";
console.log(add(1, 1));
console.log(square(3));

/////// Example 4 ////////
//Importing an exporting a default function
import add from "./export";
console.log(add(1, 1));

/////// Example 5 ////////
//Importing an exporting a default function
import add from "./export";
console.log(add(1, 1));

/////// Example 6 ////////
//Importing an exporting a default function and a named function
import add, { square } from "./export";
console.log(add(1, 1));
console.log(square(3));

/////// Example 7 ////////
//Importing an exporting a default function with a new name
//The "add" function was exported but imported as "myAdd"
import myAdd from "./export";
console.log(myAdd(1, 1));

/////// Example 8 ////////
//Importing an exporting with the inline style
import add, { square } from "./export";
console.log(add(1, 1));
console.log(square(3));
