import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <header className="glass-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon-circle">
            <span className="material-symbols-outlined">campaign</span>
          </div>
          <h2 className="logo-text">Girls Who Yap</h2>
        </Link>
        <nav className="nav-menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/partners">Partners</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className="nav-right">
          <Link to="/get-involved" className="pill-cta">Get Involved</Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
