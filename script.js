const students = ["Ravikant", "Sharad", "Suraj"];
const studentsList = document.getElementById("list");
const newName = document.getElementById("new-name");

for (let i = 0; i < students.length; i++) {
    studentsList.innerHTML += `<p>${students[i]} </p`;
}

const deleteIcon = document.getElementById("delete-icon");

function insertName() {
    studentsList.innerHTML += `<p>${newName.value} </p>`;
    newName.value = "";
}