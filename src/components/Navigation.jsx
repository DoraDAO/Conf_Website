import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      // Auto-close menu when scrolling down
      if (scrollPosition > 100 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Static Logo on Left */}
      <div className="static-logo">
        <Link to="/" className="logo-link">
          <span className="logo-brace">{'{'}</span>
          <span className="logo-text-main">Girls Who Yap</span>
          <span className="logo-brace">{'}'}</span>
        </Link>
      </div>

      {/* Collapsible Navbar */}
      <header className={`nav-header ${isScrolled ? 'nav-collapsed' : ''} ${isMenuOpen ? 'nav-open' : ''}`}>
        {isScrolled && !isMenuOpen ? (
          <button className="nav-toggle-btn" onClick={toggleMenu}>
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        ) : (
          <nav className="nav-menu-full">
            <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</NavLink>
            <NavLink to="/community" onClick={() => setIsMenuOpen(false)}>Community</NavLink>
            <NavLink to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
            <NavLink to="/partners" onClick={() => setIsMenuOpen(false)}>Partners</NavLink>
            <Link to="/get-involved" className="nav-cta-btn" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
            {isScrolled && (
              <button className="nav-close-btn" onClick={() => setIsMenuOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </nav>
        )}
      </header>
    </>
  );
}

export default Navigation;
