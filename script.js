const students = ["Ravikant", "Sharad", "Suraj"];
const studentsList = document.getElementById("list");
const newName = document.getElementById("new-name");
showList();
function showList() {
  for (let i = 0; i < students.length; i++) {
    studentsList.innerHTML += `<div style="margin:15px 0">  <div style="display:flex;justify-content:space-between;  background-color: #e9e9e9;padding:10px; border-radius:3px">${
      i + 1
    }. ${students[i]} 
  <div>
    <img src='./images/edit.png' width="18px" style="cursor:pointer;vertical-align:middle"; onclick="editItem(${i})"/> 
    <img src='./images/delete.png' width="18px" style="cursor:pointer; vertical-align:middle"; onclick="deleteItem(${i})" />
     </div>     </div>
      </div> `;
  }
}

function insertName() {
  if (!!newName.value == true) {
    students.push(newName.value);
    newName.value = "";
    studentsList.innerHTML = "";
    showList();
  } else {
    alert("Enter your Name:");
  }
}

function deleteItem(index) {
  students.splice(index, 1);
  studentsList.innerHTML = "";
  showList();
}

// function editItem(index) {
//     students.splice(index, 1, students[index]);
//   studentsList.innerHTML = "";
//   showList();
// }
