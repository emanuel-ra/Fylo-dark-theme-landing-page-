import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {

  return (
    <footer className="footer">
      <div class="w-full">
        <img src={logo} alt="Fylo logo" />
      </div>

      <article className="w-full grid grid-cols-1 lg:grid-cols-6 mt-5 lg:gap-4">
        
        <article className="lg:col-span-2 flex">
          <div className="p-3"><img src={location} alt="location" className="w-14" /></div>
          <blockquote className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </blockquote>
        </article>

        <article className="text-white  mt-10 lg:mt-0">
          <span className="flex"><img src={phone} alt="+1-543-123-4567" className="m-2 mr-4" /> +1-543-123-4567</span>
          <span className="flex"><img src={email} alt="+1-543-123-4567" className="m-2 mr-4"/> example@fylo.com</span>
        </article>

        <article className="text-white lg:px-14 mt-10 lg:mt-0">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>        
          </ul>         
        </article>

        <article className="text-white mt-10 lg:mt-0">
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </article>

        <article className="flex justify-center text-white space-x-4 mt-10 lg:mt-0">
          <a href="#">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#">
            <FaTwitter  className="text-2xl" />
          </a>
          <a href="#">
            <FaInstagram  className="text-2xl" />
          </a>
        </article>
      </article>

      <div className="text-center mt-10 text-white">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/emanuelramirezabarca/" target="_blank">Tomas Emanuel Ramirez Abarca</a>.
      </div>
    </footer>
    
  );
}

export default Footer;
