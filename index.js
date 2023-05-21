const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//code for creating a new todolist on clicking the add new list icon
const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector(".popup span");
const addNewListButton = popupBox.querySelector(".add");
openNote = document.querySelectorAll(".note");

todoLists = [];
localStorage.setItem("todoLists", todoLists);
let siz = localStorage.getItem("todoLists").length;
var count = siz;

console.log(siz);

addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
  listContainer.innerHTML = "";
});

closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

addNewListButton.addEventListener("click", () => {
  saveTaskData();
  console.log("clicked");
});

//making a function to save data
function saveTaskData() {
  tasks = [];
  tasks.push(listContainer.innerHTML);
  todoLists.push(tasks);
  console.log(todoLists.length);
  localStorage.setItem("todoLists", JSON.stringify(todoLists));
  showLists();
}

function updateTasksandList(event) {
  popupBox.classList.add("show");
  var storedArray = JSON.parse(localStorage.getItem("todoLists"));

  var clickedListHTML = event.currentTarget.innerHTML;
  var ind = getIndFromHTML(clickedListHTML);
  console.log(ind);
  var tasks = storedArray[ind];
  listContainer.innerHTML = tasks;
}

function del(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    console.log("clicked");
    saveTaskData2(ind);
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTaskData2(ind);
  }
}
listContainer.addEventListener("click", del, false);

function getIndFromHTML(html) {
  // Parse the HTML content and extract the value from the span tag
  var spanTag = document.createElement("span");
  spanTag.innerHTML = html;
  var ind = spanTag.querySelector(".brrr").innerHTML;
  return Number(ind);
}

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

function showLists() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  for (var i = 0; i < todoLists.length; i++) {
    var liTag = `
    <li class="note" onClick="updateTasksandList(event)">
      <p class="details">This is a Title</p>
      <div class="bottom-content">
        <span>April 3, 2022</span>
        <div class="settings">
          <i class="fas fa-trash-alt outline-icon"></i>
        </div>
      </div>
      <span class="brrr">${i}</span>
    </li>`;
    addBox.insertAdjacentHTML("afterend", liTag);
  }
}

showLists();
