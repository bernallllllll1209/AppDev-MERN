import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import initialStudents from "./data/students.json";
 
function App() {
  const [students, setStudents] = useState(initialStudents);
 
  function addStudent(newStudent) {
    const studentWithId = {
      ...newStudent,
      id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    };
    setStudents([...students, studentWithId]);
  }
 
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/students"
              element={<Students students={students} />}
            />
            <Route path="/students/:id" element={<StudentDetails students={students} />} />
            <Route
              path="/add-student"
              element={<AddStudent onAddStudent={addStudent} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
