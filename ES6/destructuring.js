// Destructuring
// This is a very common technique that helps to make code succinct. It reduces repetition of words that is so common.
// When you see code like:
// const { type, amount } = expense
// This means assign a new variable called "type" the "type" property in the "expense" object and a new variable called "amount" the "amount" property in the "expense" object
// let dog = {
// name: "obie"
// };
// let { name } = dog;

// you can destructure arrays too
// const firstCompany = companies[0] is improved to const [ firstCompany ] = companies

// you can actually combine array and object descructuring with nesting, such as when you have an array of objects. You can array destructure to get access to a specific object and then object destructure to get access to a specific property.
