const studentForm = document.getElementById("studentForm");
const message = document.getElementById("message");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value.trim();
    const email = document.getElementById("email").value.trim();

    // Check required fields
    if (!name || !roll || !course || !email) {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    // Get existing students from localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Check duplicate roll number
    const existingStudent = students.find(student =>
        student.roll.toLowerCase() === roll.toLowerCase()
    );

    if (existingStudent) {
        showMessage("Roll number already exists!", "error");
        return;
    }

    // Create student object
    const newStudent = {
        name: name,
        roll: roll,
        course: course,
        email: email
    };

    // Add student to array
    students.push(newStudent);

    // Save students in localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Show success message
    showMessage("Student added successfully!", "success");

    // Clear form
    studentForm.reset();

});

// Display message
function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}