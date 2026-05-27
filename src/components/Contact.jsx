
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content-parent">
        <div className="contact-heading">
          <h2>
            Get{' '}
            <span className="text-blue">in Touch</span>
          </h2>
        </div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank you for reaching out!</h3>
            <p>
              Your message has been safely recorded. Since this is a demo, no external data was sent.
            </p>
            <button
              type="button"
              className="btn-hero-outline"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First Name <span className="req">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last Name <span className="req">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email <span className="req">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="mobile">
                  Mobile No. <span className="req">*</span>
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  className="form-input"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile no."
                  required
                />
              </div>
            </div>

            <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group full">
                <label className="form-label" htmlFor="message">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message"
                  rows={6}
                  required
                />
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn-submit">
                <span className="arrow-circle">
                  <img src="/Arrow%20icon.png" alt="" />
                </span>
                Submit Now
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}


