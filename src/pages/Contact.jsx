import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

function Contact({ setProgress }) {
  //redux
  const theme = useSelector((state) => state.themeReducer.theme);
  const initialData = { name: "", email: "", subject: "", message: "" }
  const [form, setForm] = useState(initialData);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log("serviceId", serviceId);
  console.log("templateId", templateId);
  console.log("publicKey", publicKey)

  const contactInfo = [
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
  ]

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(form); // wire up EmailJS or your backend here
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      );

      alert("Message sent successfully!");

      setForm(initialData);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    }
  };
  return (
    <section id="contact" className={`contact-section ${theme === "light" ? "light" : "dark"}`}>
      <div>

        <div className="common-title-container">
          <h2 className="title">Get In <span className='section-name'>Touch</span></h2>
          <div className="bottom-line" />
          <p className="sub-tittle">Have a project in mind? Let's build something great together.</p>
        </div>

        <div className="container grid grid-two-cols">

          {/* Left: Info */}
          <div className={`contact-info`}>
            <div className={`contact-card`}>
              <h3 className={`contact-title`}>Let's talk</h3>
              <p className={`contact-description`}>
                Open to freelance, full-time roles, and collaborations. Reach out anytime!
              </p>
            </div>

            {contactInfo.map(({ icon, label, val, color }) => (
              <div className={`contact-item`} key={label}>
                <div
                  className="contact-icon"
                  style={{
                    "--icon-color": color,
                  }}
                >
                  {icon}
                </div>

                <div>
                  <div className={`contact-label`}>{label}</div>
                  <div className={`contact-value`}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <form className={`contact-form-card ${theme === "light" ? "light" : "dark"}`} onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              {["name", "email"].map((field) => (
                <div className="contact-form-group" key={field}>
                  <label className="contact-form-label">
                    {field === "name" ? "Your name" : "Email address"} <span className="required-icon">*</span>
                  </label>

                  <input
                    type={field === "name" ? "text" : "email"}
                    className="contact-form-input"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === "name" ? "John Doe" : "john@mail.com"}
                    required={true}
                  />
                </div>
              ))}
            </div>

            {["subject", "message"].map((field) => (
              <div className="contact-form-group contact-form-margin" key={field}>
                <label className="contact-form-label">
                  {field.charAt(0).toUpperCase() + field.slice(1)} <span className="required-icon">*</span>
                </label>

                {field === "message" ? (
                  <textarea
                    className="contact-form-textarea"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    required={true}
                  />
                ) : (
                  <input
                    className="contact-form-input"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder="Project / Collaboration / Job"
                    required={true}
                  />
                )}
              </div>
            ))}

            <button type={"submit"} className="contact-form-button">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

