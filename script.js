const students = ["Ravikant", "Sharad", "Suraj"];
const studentsList = document.getElementById("list");
const newName = document.getElementById("new-name");

for (let i = 0; i < students.length; i++) {
  studentsList.innerHTML += `<p>${students[i]} <img src='./images/delete.png' width="18px" style="cursor:pointer; vertical-align:middle"; onclick="deleteItem(${i})" /></p`;
}

function insertName() {
  if (!!newName.value == true) {
    students.push(newName.value);
    newName.value = "";
    studentsList.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
      studentsList.innerHTML += `<p>${students[i]} <img src='./images/delete.png' width="18px" style="cursor:pointer; vertical-align:middle"; onclick="deleteItem(${i})" /></p`;
    }
  } else {
    alert("Enter your Name:");
  }
}

function deleteItem(index) {
  students.splice(index, 1);
  studentsList.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    studentsList.innerHTML += `<p>${students[i]} <img src='./images/delete.png' width="18px" style="cursor:pointer; vertical-align:middle"; onclick="deleteItem(${i})" /></p`;
  }
}
