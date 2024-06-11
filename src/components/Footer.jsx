import React, { useState, useRef } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Footer = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Esther",
        message: message,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      toast.success("Message sent successfully");
      setEmail("");
      setMessage("");
      setName("");
    } catch (err) {
      console.log(err);
      toast.error("Error while sending message");
    }
  };

  return (
    <footer className="w-[90%] sm:w-[80%] mx-auto py-6 2xl:w-[1500px] overflow-hidden" id="hire">
      <div className="z-[9999]">
        <ToastContainer position="top-center" autoClose={5000} />{" "}
      </div>
      <section className="flex flex-col sm:flex-row gap-8 w-full items-start ">
        <div className="mt-6" data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-6 uppercase">Get In Touch</h2>

          <article className="flex gap-2 items-center my-3 text-gray-400">
            <CiMail size={25} className="text-gray-500" />
            <p>estherlardze8@gmail.com</p>
          </article>

          <article className="flex gap-2 items-center text-gray-400">
            <IoCallOutline size={25} className="text-gray-500" />
            <p>+233 54 392 0766</p>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full flex-1"
          data-aos="fade-left"
        >
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-4">
            <div className="mb-4 w-full md:w-[50%]">
              <label
                htmlFor="user_name"
                className="block text-gray-300 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-black/90 border border-yellow-600 rounded-md outline-none"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-[50%]">
              <label
                htmlFor="user_email"
                className="block text-gray-300 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-black/90 border border-yellow-600 rounded-md outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full px-3 bg-black/90 border-yellow-600  py-2 border rounded-md focus:outline-none"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-fit font-semibold bg-yellow-500 border-2 border-yellow-500 text-black hover:text-white py-2 px-6 flex justify-center items-center mx-auto rounded-md hover:bg-transparent transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:items-center my-6 pt-6 border-t pb-4 border-gray-600">
        <p className="text-gray-400">Copyright @ 2024. Esther Lardze</p>

        <div className="flex justify-center gap-4">
          <Link
            to="https://www.linkedin.com/in/esther-odzao-7219b4213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={27} className="text-gray-400" />
          </Link>
          <Link
            to="https://twitter.com/e_lardze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={27} className="text-gray-400" />
          </Link>
          <Link
            to="https://github.com/estherlardze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={27} className="text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
