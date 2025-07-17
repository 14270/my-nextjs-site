"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Your request has been submitted successfully!");
    handleClear(); // Clear form on success
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-20 lg:py-28 dark:bg-gray-900"
    >
      <div className="container mx-auto flex flex-wrap px-4">
        {/* Left Section with Contact Info and App Links */}
        <div className="mb-10 w-full px-4 lg:mb-0 lg:w-5/12">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
            Let's Talk
          </h2>
          <p className="text-body-color mb-6 dark:text-gray-300">
            Get in touch with our team and we'll get back to you shortly.
          </p>

          <div className="mb-6 text-black dark:text-white">
            <h3 className="font-semibold">India</h3>
            <p>+91 8886661396</p>
            <p>+91 8886663326</p>
          </div>

          <div className="mb-6 text-black dark:text-white">
            <h3 className="font-semibold">USA</h3>
            <p>+1 7542570162</p>
          </div>

          <div className="mb-6 text-black dark:text-white">
            <h3 className="font-semibold">Email</h3>
            <p>sales@renote.ai</p>
          </div>

          <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
            Download Our App
          </h3>
          <div className="flex gap-4">
            <a
              href="https://apps.apple.com/in/app/renote-ai-scanner-ocr-gpt/id6479944118"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.renote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full px-4 lg:w-7/12">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-4 w-full px-3 md:w-1/2">
                <label className="mb-2 block font-medium">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded border bg-gray-100 p-3 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4 w-full px-3 md:w-1/2">
                <label className="mb-2 block font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                  className="w-full rounded border bg-gray-100 p-3 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div className="mb-4 px-3">
              <label className="mb-2 block font-medium">Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="w-full rounded border bg-gray-100 p-3 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="mb-4 px-3">
              <label className="mb-2 block font-medium">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded border bg-gray-100 p-3 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Please select a subject</option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="mb-4 px-3">
              <label className="mb-2 block font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                className="w-full rounded border bg-gray-100 p-3 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>

            <div className="flex flex-wrap gap-4 px-3">
              <button
                type="submit"
                className="rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="rounded border border-gray-400 px-6 py-3 text-black transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
