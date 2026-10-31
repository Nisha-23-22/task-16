// Student Records - render cards with map(), search with filter()

// Array of student objects (name, marks, class, address)
var students = [
    { name: "Salman Ahmed", marks: "38%", class: "3rd", address: "ABC Colony, Delhi" },
    { name: "Riya Sharma", marks: "85%", class: "10th", address: "999, XYZ Street, Mumbai" },
    { name: "Rohan Patel", marks: "72%", class: "12th", address: "123, ABC Colony, Delhi" },
    { name: "Priya Singh", marks: "95%", class: "8th", address: "789, PQR Nagar, Bangalore" },
    { name: "Abhishek Rao", marks: "60%", class: "9th", address: "101, LMN Road, Kolkata" },
    { name: "Neha Verma", marks: "80%", class: "11th", address: "222, DEF Avenue, Chennai" },
    { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
    { name: "Pooja Mishra", marks: "88%", class: "12th", address: "444, STU Colony, Pune" },
    { name: "Rajesh Singhania", marks: "92%", class: "9th", address: "555, VWX Street, Jaipur" }
];

var cardsContainer = document.getElementById("studentCards");
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");


// Render the given list of students as cards using map()
function renderStudents(list) {
    if (list.length === 0) {
        cardsContainer.innerHTML = '<p class="no-result">No student found.</p>';
        return;
    }

    var cardsHtml = list.map(function (student) {
        return `
            <div class="card">
                <p><span class="label">Student Name: </span><span class="value">${student.name}</span></p>
                <p><span class="label">Marks: </span><span class="value">${student.marks}</span></p>
                <p><span class="label">Class: </span><span class="value">${student.class}</span></p>
                <p><span class="label">Address: </span><span class="value">${student.address}</span></p>
            </div>
        `;
    });

    cardsContainer.innerHTML = cardsHtml.join("");
}


// Filter the students by name using filter()
function searchStudents() {
    var searchText = searchInput.value.trim().toLowerCase();

    var result = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchText);
    });

    renderStudents(result);
}


// Show all students when the page loads
renderStudents(students);

// Real-time search while typing, and also when the Search button is clicked
searchInput.addEventListener("input", searchStudents);
searchBtn.addEventListener("click", searchStudents);
