const students = [];

const studentsList = document.getElementById("list-container");
const newName = document.getElementById("new-name");
const newNumber = document.getElementById("new-number");
const mainImg = document.getElementById("main-img");

function dataFromLocalStorage() {
  const studentsName = JSON.parse(localStorage.getItem("StudentsName"));
  if (studentsName) {
    students.push(...studentsName);
  }

  if (students.length === 0) {
    const noWorkPara = document.getElementById("no-student-para");
    noWorkPara.innerText = "No Students";
    mainImg.src = "./images/happy.png";
  } else {
    showList();
  }
}
dataFromLocalStorage();

function showList() {
  localStorage.setItem("StudentsName", JSON.stringify(students));
  studentsList.innerHTML = "";
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
    students.unshift(newName.value);
    showList();
    newName.value = "";
  } else {
    alert("Enter your Name:");
  }
}

function deleteItem(index) {
  students.splice(index, 1);
  showList();
}

// function editItem(index) {
//   students.splice(index, 1, students[index]);
//   studentsList.innerHTML = "";
//   showList();
// }
