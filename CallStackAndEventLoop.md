### Call stack, task queue, event loop 

Javascript is a single threaded language, which means there is only one call
stack. Javascript is also a non blocking language. How is that possible? The
answer is javascript runtimes (like v8) are complemented by extra stuff that
comes from browsers (or C++, in the case of Node).That extra stuff includes web apis, a task queue and the event loop. So, when the greater context is considered, javascript can run some code concurrently (e.g. setTimeout()) 

#### How the call stack, task queue, and event loop works

Functions are pushed onto the callstack when they are called. Functions
are popped off the call stack when they are returned. Functions on the
callstack block those beneath it - meaning each function must return (be popped
off the stack) for the one underneath it to run.

Certain functions have the ability to partially run outside of the call stack, and partially be placed on the task queue, ready to be pushed onto the call stack as soon as possible by the event loop (when the call stack is empty). For example, setTimeout() is able to start a timer outside of the call stack. After the timer is complete, its callback function is sent to the task queue. When the call stack empties, the event loop pushes the callback function to the call stack and it is executed. 

#### What is a callback function?

The term is used a little loosely. Sometimes people say it is when a function
calls another function. Sometimes people say it is when a function calls
another function that it received as an argument. But I think it actually means
an async function. The "callback" part is when the function is pushed onto the
call stack from the task queue by the event loop. 


