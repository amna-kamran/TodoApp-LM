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
}

//coding the function where if we click on the task, it gets toggled between being checked
//and unchecked

//we do this by first adding the event listener to the list-container which is the id name
//of the ul tag inside which we keep all the tasks
function del(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}
listContainer.addEventListener("click", del, false);
