import { useParams, Link } from "react-router-dom";
 
function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));
 
  if (!student) {
    return (
      <div className="not-found">
        <p>Student not found.</p>
        <Link to="/students" className="button button-primary">Back to students</Link>
      </div>
    );
  }

  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
 
  return (
    <article className="detail-panel">
      <div className="detail-heading">
        <span className="student-avatar" aria-hidden="true">{initials}</span>
        <div>
          <p className="eyebrow">Student profile</p>
          <h1>{student.name}</h1>
        </div>
      </div>
      <dl className="detail-grid">
        <div className="detail-item"><dt>Student number</dt><dd>{student.studentNumber}</dd></div>
        <div className="detail-item"><dt>Course</dt><dd>{student.course}</dd></div>
        <div className="detail-item"><dt>Course description</dt><dd>{student.courseDescription}</dd></div>
        <div className="detail-item"><dt>Year level</dt><dd>{student.year || "Not specified"}</dd></div>
        <div className="detail-item"><dt>Sex</dt><dd>{student.sex || "Not specified"}</dd></div>
      </dl>
      <Link to="/students" className="back-link">&larr; Back to students</Link>
    </article>
  );
}
 
export default StudentDetails;
