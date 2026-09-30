import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">College of Engineering and Information Technology</p>
          <h1>Every student, one connected place.</h1>
          <p>
            Welcome to the CvSU student directory. Find student records and
            keep course information organized.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="button button-primary">Browse students</Link>
            <Link to="/add-student" className="button button-secondary">Add a student</Link>
          </div>
        </div>
      </div>
      <p className="home-note"><strong>Student information system</strong>, built to make essential academic details easy to access.</p>
    </section>
  );
}
 
export default Home;
