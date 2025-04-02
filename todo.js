const inputField = document.getElementById("inputBox");
const container = document.getElementById("listContainer");

function test() {
  console.log("git testing");
}

function test2() {
  console.log("git testing 2");
}
function addTask() {
  if (inputField.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<img src="image/cross.png"/>';
    li.appendChild(span);
  }
  inputField.value = "";
  saveData();
}

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
    saveData();
  }
});
container.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}

function getData() {
  container.innerHTML = localStorage.getItem("data");
}
getData();
