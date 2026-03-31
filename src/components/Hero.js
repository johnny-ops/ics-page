import './Hero.css';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <FaGraduationCap className="logo-icon" />
            <span>ICS</span>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#department">Department</a></li>
            <li><a href="#organization">Organization</a></li>
            <li><a href="#bsit">BSIT Schedule</a></li>
            <li><a href="#bscpe">BSCPE Schedule</a></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
      </nav>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">INSTITUTE OF COMPUTING STUDIES</h1>
          <p className="hero-subtitle">Educating globally competitive future engineers and IT professionals</p>
        </div>
      </div>

      <div className="welcome-section">
        <h2>Welcome ICS Students</h2>
      </div>

      <div className="dean-section">
        <div className="dean-container">
          <div className="dean-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="dean-content">
            <h3>Engr. Rocendo F. Astillero, MSCpE</h3>
            <p className="dean-title">Dean, Institute of Computing Studies</p>
            <div className="dean-message">
              <p>Good morning, students. I am so excited to welcome you to our school. This is a new beginning for all of us, and I am confident that we will all achieve great things together.</p>
              <p>I know that you are all here because you want to learn. You want to become educated people who can make a difference in the world. And I am here to tell you that you can achieve anything you set your mind to.</p>
              <p>But education is not just about learning facts and figures. It is also about learning how to think critically, solve problems, and communicate effectively. It is about developing your talents and abilities so that you can reach your full potential.</p>
              <p>So I challenge you to strive for excellence in your education. Don't just settle for good enough. Push yourself to be the best that you can be. And remember, I am here to support you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
