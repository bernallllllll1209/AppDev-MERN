import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const COURSE_OPTIONS = [
  { value: "BSIT", label: "BSIT - Bachelor of Science in Information Technology" },
  { value: "BSCS", label: "BSCS - Bachelor of Science in Computer Science" },
  { value: "BSIS", label: "BSIS - Bachelor of Science in Information Systems" },
];
const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const SEX_OPTIONS = ["Male", "Female"];
 
function AddStudent({ onAddStudent }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "",
    course: COURSE_OPTIONS[0].value,
    year: YEAR_OPTIONS[0],
    sex: SEX_OPTIONS[0],
  });
 
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    const selectedCourse = COURSE_OPTIONS.find(
      (c) => c.value === formData.course
    );
 
    onAddStudent({
      name: formData.name,
      studentNumber: formData.studentNumber,
      course: selectedCourse.value,
      courseDescription: selectedCourse.label.split(" - ")[1],
      year: formData.year,
      sex: formData.sex,
    });
 
    navigate("/students");
  }
 
  return (
    <section className="form-layout">
      <div className="form-heading">
        <p className="eyebrow">Directory record</p>
        <h1>Add student</h1>
        <p className="page-description">Enter the student details below.</p>
      </div>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-grid">
          <div className="field">
            <label htmlFor="student-name">Full name</label>
            <input id="student-name" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="student-number">Student number</label>
            <input id="student-number" type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="student-course">Course</label>
            <select id="student-course" name="course" value={formData.course} onChange={handleChange}>
              {COURSE_OPTIONS.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="student-year">Year level</label>
            <select id="student-year" name="year" value={formData.year} onChange={handleChange}>
              {YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="student-sex">Sex</label>
            <select id="student-sex" name="sex" value={formData.sex} onChange={handleChange}>
              {SEX_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="button button-secondary" onClick={() => navigate("/students")}>Cancel</button>
          <button type="submit" className="button button-primary">Add student</button>
        </div>
      </form>
    </section>
  );
}
 
export default AddStudent;
