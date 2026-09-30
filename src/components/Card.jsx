import { Link } from "react-router-dom";
 
function Card({ student }) {
  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="student-card">
      <div className="student-card-top">
        <span className="student-avatar" aria-hidden="true">{initials}</span>
        <div>
          <h2>{student.name}</h2>
          <p className="student-number">{student.studentNumber}</p>
        </div>
      </div>
      <span className="course-tag">{student.course}</span>
      <p className="course-description">{student.courseDescription}</p>
      <div className="card-meta">
        <span>{student.year || "Year not specified"}</span>
        <span>{student.sex || "Not specified"}</span>
      </div>
      <Link to={`/students/${student.id}`} className="card-link">
        View student details <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
 
export default Card;
