const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("empty task cannot be added");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    //adds the new task at the start
    listContainer.insertBefore(li, listContainer.firstChild);
    //adding a cross button
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// Add an event listener to the input field for keyup event
inputBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

//coding the function where if we click on the task, it gets toggled between being checked
//and unchecked

//we do this by first adding the event listener to the list-container which is the id name
//of the ul tag inside which we keep all the tasks
function del(e) {
  //this function first checks if the clicked tag is a list tag or a span tah
  //if its a list one, it toggles the li tag's class name to checked
  //if its a span then it removes the parent element of the span which is
  //the list
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}
listContainer.addEventListener("click", del, false);

//making a function to save data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();

//code for creating a new todolist on clicking the add new list icon
const addBox = document.querySelector(".add-box");
popupBox = document.querySelector(".popup-box");
