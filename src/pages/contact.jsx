import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 md:px-16 md:py-12">
        <div className="flex justify-center items-center">
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
            className="object-cover w-full h-[800px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-[60vh] flex items-center justify-center"
  >
    <div
      className="absolute inset-0 bg-cover bg-center opacity-50"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    />
    <h1 className="relative z-10 font-playfair text-5xl md:text-7xl text-white">
      Let's Connect
    </h1>
  </motion.div>
);

const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-lg mx-auto mt-12 px-4"
  >
    <h2 className="text-4xl font-playfair mb-8 text-center">Contact Us</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      />
      <SubmitButton />
      <ContactInfo />
    </form>
  </motion.div>
);

const InputField = ({ name, type, placeholder, value, onChange }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
  />
);

const TextArea = ({ name, placeholder, value, onChange }) => (
  <motion.textarea
    whileFocus={{ scale: 1.02 }}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    rows={4}
    className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
  />
);

const SubmitButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    className="w-full px-6 py-3 bg-black text-white font-semibold border border-gray-700 rounded-lg hover:bg-black hover:text-white hover:border-white transition-colors"
  >
    Send Message
  </motion.button>
);

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="max-w-lg mx-auto mt-16 px-4 text-center"
  >
    <h2 className="text-2xl font-playfair mb-4">Visit Us</h2>
    <p className="mb-2">
      Qay Coffee Bandung, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat
      401156. <br /> 6 AM - 11 PM
    </p>
    <p className="mb-2">Phone: (555) 123-4567</p>
    <p>Email: hello@qaycoffee.com</p>
  </motion.div>
);
