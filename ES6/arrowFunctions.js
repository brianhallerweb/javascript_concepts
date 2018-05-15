// arrow functions
// the syntax is far more succinct but, more importantly, it fixes a common "this" problem
// It is really hard to express the problem and the solution theoretically but one common place that the problem occurs is with callbacks inside array methods like map. You almost always see these functions written as fat arrows because, without fat arrows, the proper context is lost.
