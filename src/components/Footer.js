import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Institute of Computing Studies</h3>
            <p>Educating globally competitive future engineers and IT professionals</p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About ICS</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#faculty">Faculty</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li><a href="#bsit">BS Information Technology</a></li>
              <li><a href="#bscs">BS Computer Science</a></li>
              <li><a href="#bscpe">BS Computer Engineering</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>University Campus, City</span>
              </li>
              <li>
                <FaPhone />
                <span>+63 123 456 7890</span>
              </li>
              <li>
                <FaEnvelope />
                <span>ics@university.edu.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Institute of Computing Studies. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
