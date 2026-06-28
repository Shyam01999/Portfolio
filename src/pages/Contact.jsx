import React, { useEffect, useState } from "react";

function Contact({ setProgress }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // wire up EmailJS or your backend here
  };
  return (
    <section id="contact" className="contact-section">
      <div>

        <div className="common-title-container">
          <h2 className="title">Get In <span className='section-name'>Touch</span></h2>
          <div className="bottom-line" />
          <p className="sub-tittle">Have a project in mind? Let's build something great together.</p>
        </div>

        <div className="container grid grid-two-cols">

          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-card">
              <h3 className="contact-title">Let's talk</h3>
              <p className="contact-description">
                Open to freelance, full-time roles, and collaborations. Reach out anytime!
              </p>
            </div>

            {[
              {
                icon: "📧",
                label: "Email",
                val: "shyamsundarsahoo1998@gmail.com",
                color: "#00d4ff",
              },
              {
                icon: "📞",
                label: "Phone",
                val: "+91 9337757671",
                color: "#a78bfa",
              },
              {
                icon: "📍",
                label: "Location",
                val: "Dhenkanal, Odisha",
                color: "#38bdf8",
              },
            ].map(({ icon, label, val, color }) => (
              <div className="contact-item" key={label}>
                <div
                  className="contact-icon"
                  style={{
                    "--icon-color": color,
                  }}
                >
                  {icon}
                </div>

                <div>
                  <div className="contact-label">{label}</div>
                  <div className="contact-value">{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div className="contact-form-card">
            <div className="contact-form-grid">
              {["name", "email"].map((field) => (
                <div className="contact-form-group" key={field}>
                  <label className="contact-form-label">
                    {field === "name" ? "Your name" : "Email address"}
                  </label>

                  <input
                    className="contact-form-input"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "name" ? "John Doe" : "john@mail.com"}
                  />
                </div>
              ))}
            </div>

            {["subject", "message"].map((field) => (
              <div className="contact-form-group contact-form-margin" key={field}>
                <label className="contact-form-label">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>

                {field === "message" ? (
                  <textarea
                    className="contact-form-textarea"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                  />
                ) : (
                  <input
                    className="contact-form-input"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder="Project / Collaboration / Job"
                  />
                )}
              </div>
            ))}

            <button className="contact-form-button" onClick={handleSubmit}>
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

