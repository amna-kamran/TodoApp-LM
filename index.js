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
