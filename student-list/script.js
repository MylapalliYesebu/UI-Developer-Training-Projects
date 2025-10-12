// script.js

// Sample student data (array of objects)
const students = [
  { name: "Ramesh", age: 21 },
  { name: "Sita", age: 19 },
  { name: "Krishna", age: 23 },
  { name: "Lakshmi", age: 20 },
  { name: "Arjun", age: 22 }
];

const studentTableBody = document.getElementById("studentTableBody");

function displayStudents(list) {
  // Clear old data
  studentTableBody.innerHTML = "";

  // Add each student as a new row
  list.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.name}</td><td>${student.age}</td>`;
    studentTableBody.appendChild(row);
  });
}

const viewAllBtn = document.querySelector("button:nth-child(1)");
const sortByNameBtn = document.querySelector("button:nth-child(2)");
const sortByAgeBtn = document.querySelector("button:nth-child(3)");

viewAllBtn.addEventListener("click", () => {
  displayStudents(students);
});

sortByNameBtn.addEventListener("click", () => {
  const sortedByName = [...students].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  displayStudents(sortedByName);
});

sortByAgeBtn.addEventListener("click", () => {
  const sortedByAge = [...students].sort((a, b) => a.age - b.age);
  displayStudents(sortedByAge);
});
