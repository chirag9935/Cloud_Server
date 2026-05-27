export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img src="/cloud_footer.png" alt="CloudServer logo" className="footer-logo" />
          <p className="footer-desc">
            We specialize in delivering secure, scalable, and high-performance cloud
            solutions tailored to modern business needs. From reliable hosting and data
            storage to advanced cybersecurity and DevOps, our services are designed to
            simplify operations, enhance efficiency, and support long-term growth in an
            ever-evolving digital landscape.
          </p>
        </div>

        <div className="footer-col footer-col-quick-links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#services">Service</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contact">
          <h4>Contact</h4>
          <p className="contact-line">
            <i className="fa-solid fa-phone" style={{ color: '#FFFFFF', fontSize: '14px' }}></i>
            +1 222-222-2222
          </p>
          <p className="contact-line">
            <i className="fa-solid fa-envelope" style={{ color: '#FFFFFF', fontSize: '14px' }}></i>
            cloudserver@gmail.com
          </p>
        </div>

        <div className="footer-col footer-col-get-started">
          <h4>Get Started</h4>
          <ul className="footer-links">
            <li><a href="#login">Login</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Talk to Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Copyright &amp; Terms © 2025 Cloudserver. All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-center">
          <a href="#">Terms of Use</a>
          <span className="footer-sep">|</span>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-bottom-right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
