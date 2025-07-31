import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Truck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    location: '',
    message: ''
  });

  const districts = [
    'Thiruvananthapuram',
    'Kollam',
    'Pathanamthitta',
    'Alappuzha',
    'Kottayam',
    'Idukki',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      district: '',
      location: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f8e5e7]">
      {/* White header space */}
      <div className='bg-white h-20 w-full'></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#742731] mb-3">
            Get In Touch With Us
          </h1>
          <div className="w-20 h-1.5 bg-[#742731] mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">
            We're ready to deliver quality sand to your construction site
          </p>
        </motion.div>

        {/* Location Cards - Perfectly aligned */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Head Office Card */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-white p-6 rounded-xl shadow-md border border-[#742731]/20 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#742731] p-2 rounded-full mr-3 text-white">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#742731]">Head Office</h3>
            </div>
            <div className="space-y-3 pl-11">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                  <MapPin className="text-[#742731]" size={14} />
                </div>
                <p className="text-gray-700"> Kilimanoor, Vembayam</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                  <Phone className="text-[#742731]" size={14} />
                </div>
                <p className="text-gray-700">+91 78378 88666</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                  <Mail className="text-[#742731]" size={14} />
                </div>
                <p className="text-gray-700">info@sandking.com</p>
              </div>
            </div>
          </motion.div>

          {/* Kollam Depot Card */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-white p-6 rounded-xl shadow-md border border-[#742731]/20 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#742731] p-2 rounded-full mr-3 text-white">
                <Truck size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#742731]">Kollam Depot</h3>
            </div>
            <div className="space-y-3 pl-11">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                  <MapPin className="text-[#742731]" size={14} />
                </div>
                <p className="text-gray-700">456 Beach Road, Kollam</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                  <Phone className="text-[#742731]" size={14} />
                </div>
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#f8e5e7] rounded-full flex items-center justify-center mr-2 mt-0.5">
                  <Mail className="text-[#742731]" size={14} />
                </div>
                <p className="text-gray-700">kollam@sandking.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 border border-[#742731]/20"
        >
          <h2 className="text-2xl font-bold text-[#742731] mb-6 text-center">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-[#742731]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] focus:border-[#742731] bg-gray-50 text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-[#742731]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] focus:border-[#742731] bg-gray-50 text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-[#742731]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] focus:border-[#742731] bg-gray-50 text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                  District <span className="text-[#742731]">*</span>
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] focus:border-[#742731] bg-gray-50 text-sm"
                  required
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Specific Location <span className="text-[#742731]">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] focus:border-[#742731] bg-gray-50 text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message <span className="text-[#742731]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#742731] focus:border-[#742731] bg-gray-50 text-sm"
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#742731] text-white py-3 rounded-lg font-semibold hover:bg-[#5a1e26] transition-colors shadow-sm text-sm"
              >
                Submit Your Request
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;