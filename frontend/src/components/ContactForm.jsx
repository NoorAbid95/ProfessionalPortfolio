import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact/send-email",
        formData
      );
      console.log("Success:", response.data);
      toast.success("Message Sent!")
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      toast.error("Message Failed to Send")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl w-full mx-auto  bg-white">
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
          disabled={loading}
          className={`w-full mt-2 py-3 rounded-lg transition-colors duration-200 ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
