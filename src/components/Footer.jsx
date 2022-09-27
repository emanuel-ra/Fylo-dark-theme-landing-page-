import logo from "../assets/logo.svg";
import location from "../assets/icon-location.svg";

function Footer() {
  return (
    <footer className="footer">
      <div class="w-full">
        <img src={logo} alt="Fylo logo" />
      </div>

      <article className="w-full grid grid-cols-5 mt-5">
        <article className="flex">
          <div className="p-3"><img src={location} alt="location" className="w-14" /></div>
          <blockquote className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </blockquote>
        </article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </article>
    </footer>
  );
}

export default Footer;
