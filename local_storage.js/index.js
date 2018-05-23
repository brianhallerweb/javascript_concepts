// Local and Session Storage
// The local and session storage API is part of the browser. Local storage persists until
// cleared whereas session storage persists until the browser is closed. Session storage
// appears to persist with page refreshes. You access storage from within the application tab
// in the Chrome devtools.
// You store key value pairs, with both as strings. I think the format is JSON, or at least
// it can be JSON.
// like this: localStorage.setItem("name", "obie"), or: sessionStorage.setItem("name", "obie".
// Likewise, removing items is done with: localStorage.removeItem("name").
// Unfortunately, you can't add items to local storage sequentially. Each new addition will
// override the previous one. The way to solve this is to first pull the items already in
// local storage, put them in array, then add the new item to the array, and store the entire
// array. Here is a simple example of a todo list. The html is just a form with an input
// field and a button. The app just takes the input value and puts it into local storage:

let form = document.querySelector("form");
let task = document.querySelector("#taskId");
form.addEventListener("submit", e => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("task saved");
  e.preventDefault();
});
