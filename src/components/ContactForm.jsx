import React, { useState, useRef, useEffect } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    place: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(true);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const scriptURL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }
      const response = await fetch(scriptURL, { method: "POST", body: formData });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        district: "",
        place: "",
        message: "",
      });
    } catch (error) {
      alert("Submission failed. Please check your network and try again.");
      console.error("Error!", error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 py-10">
      <div
        ref={formRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-xl relative p-6 font-sans"
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
          type="button"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center text-primary mb-4">
          Contact Us
        </h2>

        {submitted && (
          <p className="text-green-600 text-center font-medium mb-4">
            Thank you! We'll get back to you shortly.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-2 border rounded-md text-sm w-full"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-2 border rounded-md text-sm w-full"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-2 border rounded-md text-sm w-full"
            />
            <select
              name="district"
              value={form.district}
              onChange={handleChange}
              required
              className="p-2 border rounded-md text-sm w-full"
            >
              <option value="">Select District</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Kollam">Kollam</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input
            type="text"
            name="place"
            value={form.place}
            onChange={handleChange}
            placeholder="Place"
            required
            className="p-2 border rounded-md text-sm w-full"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Your Message"
            required
            className="p-2 border rounded-md text-sm w-full"
          />

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md text-sm transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
