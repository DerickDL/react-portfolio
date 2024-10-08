import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl font-thin">Contact Me</h2>
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <p className="my-4">{CONTACT.email}</p>
          <p className="my-4 text-sm tracking-tighter text-neutral-500">
            Feel free to connect with me on social media. I'm most active on
            LinkedIn.
          </p>
          <div className="my-10 flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/johnderickdeleon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/DerickDL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/drckdl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/derickdl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
