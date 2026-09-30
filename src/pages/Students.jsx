import StudentCard from "../components/Card";
 
function Students({ students }) {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Directory</p>
          <h1>Students</h1>
          <p className="page-description">Browse the student records.</p>
        </div>
        <span className="student-count">{students.length} {students.length === 1 ? "student" : "students"}</span>
      </div>
      {students.length > 0 ? (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No student records yet.</div>
      )}
    </section>
  );
}
 
export default Students;
