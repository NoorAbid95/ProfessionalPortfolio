import React, { useState } from "react";
import axios from "axios";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact/send-email",
        formData
      );
      console.log("Success:", response.data);
      alert("Message Sent");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      alert("Failed to send message");
    }
  };

  return (
    <div className="max-w-xl w-full mx-auto p-6 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              className="w-full px-3 py-2 border border-black rounded-lg bg-white focus:outline-none focus:ring-black/80"
              required
              type="text"
              value={formData.name}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              className="w-full px-3 py-2 border border-black rounded-lg bg-white focus:outline-none  focus:ring-black/80"
              required
              type="email"
              value={formData.email}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            className="w-full px-3 py-2 border border-black rounded-lg bg-white focus:outline-none  focus:ring-black/80 resize-none overflow-y-auto"
            rows={6}
            required
            value={formData.message}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
