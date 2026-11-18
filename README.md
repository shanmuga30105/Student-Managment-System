# Student-Managment-System
🎓 Student Management System

📌 Project Overview

The Student Management System is a web-based application developed using HTML, CSS, and JavaScript. It helps manage student information through a simple and user-friendly interface.

This project is developed collaboratively by a team, with each member responsible for a specific feature or module.

🎯 Project Objectives

- To simplify student information management.
- To add and maintain student records.
- To validate student details before saving.
- To provide an organized and user-friendly interface.
- To improve teamwork through Git and GitHub collaboration.

🛠️ Technologies Used

- HTML5 – Structure of the application.
- CSS3 – Styling and responsive design.
- JavaScript – Functionality and form validation.
- Local Storage – Storing student information.
- Git & GitHub – Version control and team collaboration.

✨ Project Modules

The project is divided into the following feature branches:

1. Add Student – Add new student details.
2. Students – Manage and display student records.
3. Attendance – Student attendance management.
4. Dashboard – Display the dashboard section.

👩‍💻 Module: Add Student

Files:

- "add-student.html"
- "add-student.js"

Form Fields

- Student Name
- Roll Number
- Course
- Email Address

Validation Requirements

- All fields are mandatory.
- Email address must follow a valid email format.
- Roll number must be unique.
- Duplicate roll numbers should not be accepted.

Functionality

- Collect student information through a form.
- Validate all entered details.
- Check whether the roll number already exists.
- Save student details in the browser's Local Storage using the "students" key.
- Display a success message after successfully adding a student.

🌿 Git Branch Structure

Each team member works on a separate feature branch.

main
│
├── feature/add-student
│   ├── add-student.html
│   └── add-student.js
│
├── feature/students
│
├── feature/attendance
│
└── feature/dashboard

🚀 How to Run the Project

1. Clone the GitHub repository.

git clone <repository-url>

2. Open the project folder.

cd student-management-system

3. Open "add-student.html" in your web browser.

4. Enter the student details in the form.

5. Submit the form to save the student information.

🔄 Git Commands for Team Collaboration

# Create a feature branch
git checkout -b feature/add-student

# Add changes
git add .

# Commit changes
git commit -m "Add student registration form"

# Push branch to GitHub
git push origin feature/add-student

✅ Expected Outcome

The application will provide a simple platform for managing student information. The Add Student module will allow users to enter, validate, and save student details while preventing duplicate roll numbers.

👥 Team Collaboration

This project is developed through teamwork, where each member contributes to a separate module using individual Git feature branches.

📌 Future Enhancements

- Improve the user interface.
- Add student search and filtering.
- Implement attendance tracking.
- Add dashboard statistics.
- Integrate database storage.

📄 License

This project is developed for educational and learning purposes.
