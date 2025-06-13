const students = [];
const studentsList = document.getElementById("list-container");
const mainImg = document.getElementById("main-img");
const addBtn = document.getElementById("add-icon");
const nameInputElement = document.getElementById("new-name");
const numberInputElement = document.getElementById("new-number");
//5

function loadFromLStorage() {
  const saved = JSON.parse(localStorage.getItem("studentsName")) || [];
  students.push(...saved); //... Spread Operator pushes all items one by one. Also, instead of doing this, we can directly replace studentsName with students in above line.BUT we have to do it outside this function.
  renderList();
}

addBtn.addEventListener("click", insertStudent);

//1

function insertStudent() {
  const newName = nameInputElement.value.trim();
  const newNumber = numberInputElement.value.trim();

  if (!newName || !newNumber) {
    alert("Please enter both name and number.");
    return;
  }

  students.push({ Name: newName, Number: newNumber });

  saveToLStorage();

  nameInputElement.value = "";
  numberInputElement.value = "";

  renderList();
}

//2
function renderList() {
  studentsList.innerHTML = "";
  if (students.length === 0) {
    studentsList.innerHTML += `
                 <p id="no-student-para"></p>
            <img src="./images/happy.png" id="main-img" alt="Image" width="100%">
     `;
    return;
  }

  for (let i = 0; i < students.length; i++) {
    studentsList.innerHTML += `
            <div class="list-item">
                      <p>${students[i].Name} ${students[i].Number}</P>
                      <div>
                          <img src="./images/edit.png" class="edit-icon" onclick="editStudent(${i})">
                          <img src="./images/delete.png" class="delete-icon" onclick="deleteStudent(${i})">
                      </div>

            </div>
            `;
  }
}
renderList();

//3
// const deleteIcon = document.getElementById("delete-icon");
// deleteIcon.addEventListener("click", deleteName);
function deleteStudent(i) {
  students.splice(i, 1);
  saveToLStorage();
  renderList();
}

//4

function saveToLStorage() {
  localStorage.setItem("studentsName", JSON.stringify(students));
}

//6

function editStudent(i) {
  const currentStudent = students[i];

  const editingDiv = document.createElement("div");
  editingDiv.innerHTML = `
  <div class="editing-list-item">
      <input type="text" class="editingInput" value="${currentStudent.Name}"/>
      <input type="number" class="editingInput" value="${currentStudent.Number}"/>
      <button class="btn-save-edit" onclick="saveEdit(${i})">Save</button>
  </div>
  `;

  const allStudents = studentsList.children; // If we use .children  then only we can access children's Index
  studentsList.replaceChild(editingDiv, allStudents[i]); // removing allStudents[i] & adding NEW div editingDiv
}

function saveEdit(i) {
  const input = studentsList.children[i].querySelectorAll(".editingInput");
  const editingNameInput = input[0].value;
  const editingNumberInput = input[1].value;

  if (!editingNameInput || !editingNumberInput) {
    alert("Both fields are required!");
    return;
  }

  students[i] = { Name: editingNameInput, Number: editingNumberInput };
  saveToLStorage();
  renderList();
}

// Initial Load
loadFromLStorage();
