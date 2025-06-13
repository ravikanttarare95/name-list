const students = [];

//5

function loadFromLStorage() {
  const studentsName = JSON.parse(localStorage.getItem("studentsName")) || [];
  students.push(...studentsName); //... Spread Operator pushes all items one by one. Also, instead of doing this, we can directly replace studentsName with students in above line.BUT we have to do it outside this function.
  renderList();
}

loadFromLStorage();

const studentsList = document.getElementById("list-container");
const mainImg = document.getElementById("main-img");
const addBtn = document.getElementById("add-icon");

addBtn.addEventListener("click", insertName);

//1
const nameInputElement = document.getElementById("new-name");

function insertName() {
  const newName = nameInputElement.value;
  if (!newName) {
    alert("Enter your name:");
    return;
  }
  students.push(newName);
  saveToLStorage();
  nameInputElement.value = "";
  renderList();
}

//2
function renderList() {
  const studentsList = document.getElementById("list-container");
  studentsList.innerHTML = "";
  if (students.length !== 0) {
    for (let i = 0; i < students.length; i++) {
      studentsList.innerHTML += `
            <div class="list-item">
                      <p>${students[i]}</P>
                      <div>
                          <img src="./images/edit.png" class="edit-icon" onclick="editName(${i})">
                          <img src="./images/delete.png" class="delete-icon" onclick="deleteName(${i})">
                      </div>

            </div>
            `;
    }
  } else {
    studentsList.innerHTML += `
                 <p id="no-student-para"></p>
            <img src="./images/happy.png" id="main-img" alt="Image" width="100%">
     `;
  }
}
renderList();

//3
// const deleteIcon = document.getElementById("delete-icon");
// deleteIcon.addEventListener("click", deleteName);
function deleteName(i) {
  students.splice(i, 1);
  saveToLStorage();
  renderList();
}

//4

function saveToLStorage() {
  localStorage.setItem("studentsName", JSON.stringify(students));
}

//6

function editName(i) {
  const currentName = students[i];

  const editingDiv = document.createElement("div");
  editingDiv.innerHTML = `
  <div class="editing-list-item">
      <input type="text" class="editingInput" value="${currentName}"/>
      <button class="btn-save-edit" onclick="saveEdit(${i})">Save</button>
  </div>
  `;

  const allStudents = studentsList.children; // If we use .children  then only we can access children's Index
  studentsList.replaceChild(editingDiv, allStudents[i]); // removing allStudents[i] & adding NEW div editingDiv
}

function saveEdit(i) {
  const editingInput = studentsList.children[i].querySelector(".editingInput");
  students.splice(i, 1, editingInput.value);
  saveToLStorage();
  renderList();
}
