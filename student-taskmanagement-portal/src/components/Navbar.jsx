import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
        <h2>Student task portal</h2>
        <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/tasks">Tasks</Link>
        </div>
    </nav>
  );

}

export default Navbar;