import React, { useState, useEffect } from 'react';

const Footer = (props) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // обновлять каждую минуту, если нужно

    return () => clearInterval(interval);
  }, []); // Зависимость пуста, так что эффект выполняется только один раз при монтировании компонента

  return (
    <footer   className={`${props.classAct ? "active" : ""}`}>
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-item">
            <strong>About Us</strong>
            <p>We always think about buyer niches, listen to them and correct ourselves thanks to the feedback!</p>
          </div>

          <div className="footer-item">
            <strong>Company</strong>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Latest Blogs</a></li>
              <li><a href="#">App Service</a></li>
            </ul>
          </div>

          <div className="footer-item">
            <strong>Social Pages</strong>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright main-margin">
          <hr />
          <div className="copyright-text align-center">
              <p>&copy; {currentYear} Shopy.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;