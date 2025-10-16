// script.js

const form = document.getElementById('student-form');
const studentList = document.getElementById('student-list');
const submitBtn = document.getElementById('submit-btn');

let editRow = null; // Track which row is being edited

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const course = document.getElementById('course').value.trim();

  if (!name || !age || !course) {
    alert("Please fill all fields");
    return;
  }

  // If editing, update the existing row
  if (editRow) {
    editRow.cells[0].textContent = name;
    editRow.cells[1].textContent = age;
    editRow.cells[2].textContent = course;
    editRow = null;
    submitBtn.textContent = "Add Student";
  } else {
    // Otherwise, add new row
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${course}</td>
      <td>
        <button class="action-btn edit-btn">Edit</button>
        <button class="action-btn delete-btn">Delete</button>
      </td>
    `;

    studentList.appendChild(row);
  }

  // Reset form
  form.reset();
});

// Handle Edit/Delete actions
studentList.addEventListener('click', function(e) {
  if (e.target.classList.contains('edit-btn')) {
    // Edit
    editRow = e.target.closest('tr');
    document.getElementById('name').value = editRow.cells[0].textContent;
    document.getElementById('age').value = editRow.cells[1].textContent;
    document.getElementById('course').value = editRow.cells[2].textContent;
    submitBtn.textContent = "Update Student";
  }

  if (e.target.classList.contains('delete-btn')) {
    // Delete
    e.target.closest('tr').remove();
  }
});
