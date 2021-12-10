let nameInput = document.getElementById("nameInput");
let namesList = [];
let submitButton = document.getElementById("submitButton");
let nameDisplay = document.getElementById("nameDisplay");

submitButton.addEventListener("click", addName)

function addName(e) {
    e.preventDefault();
    namesList.push(nameInput.value);
    console.log(namesList)
    participants();
    nameInput.value = "";

}

function participants(){
    let displayList = document.createElement("li");
    displayList.textContent = nameInput.value;
    nameDisplay.append(displayList);

}