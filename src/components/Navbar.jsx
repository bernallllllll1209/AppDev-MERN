import { Link, NavLink } from "react-router-dom";
 
function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span>CvSU <span className="brand-subtitle">Student Directory</span></span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/students" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
            Students
          </NavLink>
          <NavLink to="/add-student" className={({ isActive }) => `nav-link nav-cta${isActive ? " active" : ""}`}>
            Add student
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
 
export default Navbar;
