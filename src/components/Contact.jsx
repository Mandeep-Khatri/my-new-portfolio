import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaComment } from "react-icons/fa";
import styles from "../style";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Using a simple email service that actually works
      const response = await fetch("https://formsubmit.co/mandeep.khatri@bulldogs.aamu.edu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.email}`,
          _captcha: false
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX} py-20`} id="contactMe">
      <div className={`${styles.boxWidth}`}>
        <div className="max-w-sm mx-auto">
          {/* Main Card Container - Matching Project Card Style Exactly */}
          <div className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card">
            {/* Header Inside Card */}
            <div className="text-center mb-6">
              <h2 className="text-white font-poppins font-semibold text-[32px] text-gradient mb-2">
                Get In Touch
              </h2>
              <p className="text-dimWhite text-sm">
                Have a question or want to collaborate? Drop me a line!
              </p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label htmlFor="email" className="block text-white font-poppins font-medium text-sm mb-1">
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <FaEnvelope className="text-dimWhite text-xs" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-7 pr-3 py-2 bg-primary border border-gray-600 rounded-md text-white placeholder-dimWhite focus:outline-none focus:border-teal-400 transition-colors text-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="block text-white font-poppins font-medium text-sm mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 pt-2 pointer-events-none">
                    <FaComment className="text-dimWhite text-xs" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="2"
                    className="w-full pl-7 pr-3 py-2 bg-primary border border-gray-600 rounded-md text-white placeholder-dimWhite focus:outline-none focus:border-teal-400 transition-colors resize-none text-sm"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white font-poppins font-semibold text-sm py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-xs text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-xs text-center mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* Social Media Section */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="flex-1 h-px bg-gray-600"></div>
                <span className="px-3 text-dimWhite font-poppins text-xs">
                  Or find me on
                </span>
                <div className="flex-1 h-px bg-gray-600"></div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/Mandeep-Khatri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  title="GitHub"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600 group-hover:scale-110 border border-gray-600">
                    <FaGithub className="text-white text-lg" />
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/mandeep-khatri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  title="LinkedIn"
                >
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600 group-hover:scale-110 border border-gray-600">
                    <FaLinkedin className="text-white text-lg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
