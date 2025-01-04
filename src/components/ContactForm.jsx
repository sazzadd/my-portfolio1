import React, { useEffect } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true }); // Initialize AOS
  }, []);

  return (
    <div id="contact" className="bg-[#0f1629]">
      <div className="bg-[#0f1629] w-9/12 mx-auto text-white py-12 px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section */}
        <div
          className="flex flex-col space-y-4"
          data-aos="fade-right" // AOS animation
        >
          <h2 className="text-3xl font-bold text-blue-400">Get in Touch</h2>
          <p className="text-gray-400">
            Have a question or want to work together? Drop us a message!
          </p>
          <div className="flex items-center space-x-4">
            <MdEmail className="text-purple-400 text-2xl" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400">olovajs@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MdLocationOn className="text-purple-400 text-2xl" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400">Laxmipure, Natore 6400</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-[#121c3b] p-6 rounded-lg shadow-lg w-full lg:w-1/2"
          data-aos="fade-left" // AOS animation
        >
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-[#0f1629] text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-[#0f1629] text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded bg-[#0f1629] text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded bg-[#0f1629] text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded shadow-lg hover:opacity-90 transition"
            >
              Send Message <span className="ml-2">🚀</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
