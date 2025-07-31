import React, { useState } from "react";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const scriptURL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // Replace with your actual script URL
      const formData = new FormData();

      for (const key in form) {
        formData.append(key, form[key]);
      }

      await fetch(scriptURL, { method: "POST", body: formData });

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
      console.error("Error!", error.message);
    }
  };

  return (
    <section className="bg-white py-12 px-4 max-w-4xl mx-auto rounded-lg shadow-md font-sans">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <a href="tel:7837888666" className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-primary font-medium px-6 py-3 rounded-lg text-center shadow">
            📞 Call: 78378 88666
          </a>
          <a
            href="https://wa.me/917837888666?text=Hi%2C%20I%20am%20interested%20in%20your%20sand%20supply%20services.%20Could%20you%20please%20share%20more%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-green-100 hover:bg-green-200 text-green-700 font-medium px-6 py-3 rounded-lg text-center shadow"
          >
            💬 WhatsApp Chat
          </a>
        </div>
        {submitted && <p className="text-green-600 font-semibold">Thank you! We'll get back to you shortly.</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="p-3 border rounded-md w-full" required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="p-3 border rounded-md w-full" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="p-3 border rounded-md w-full" required />
          <select name="district" value={form.district} onChange={handleChange} className="p-3 border rounded-md w-full" required>
            <option value="">Select District</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Kollam">Kollam</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Alappuzha">Alappuzha</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input type="text" name="place" placeholder="Place" value={form.place} onChange={handleChange} className="w-full p-3 border rounded-md" required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={4} className="w-full p-3 border rounded-md" required></textarea>

        <button type="submit" className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
