const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You Must Write Something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let i = document.createElement("i")
        i.innerHTML = "\u00d7";
        li.appendChild(i)
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
};

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
};
showTask();

