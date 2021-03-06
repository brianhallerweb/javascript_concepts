/////// Example 1 ////////
console.log("code from export.js running...");

/////// Example 2 ////////
const add = (a, b) => {
  return a + b;
};
export { add };

/////// Example 3 ////////
const add = (a, b) => {
  return a + b;
};
const square = x => {
  return x * x;
};
export { add, square };

/////// Example 4 ////////
const add = (a, b) => {
  return a + b;
};
export { add as default };

/////// Example 5 ////////
const add = (a, b) => {
  return a + b;
};
export default add;

/////// Example 6 ////////
const add = (a, b) => {
    return a + b;
  };
const square = x => {
    return x * x;
  };
export { add as default, square };

/////// Example 7 ////////
const add = (a, b) => {
    return a + b;
  };
export default add;

/////// Example 8 ////////
export const square = x => {
    return x * x;
  };
//Notice how the add function can't have a name when using
//export default. This is not true for classes. It is okay
// to write export default class myClass {}
export default (a, b) => {
    return a + b;
};
