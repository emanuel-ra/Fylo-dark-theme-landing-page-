import image from "../../assets/illustration-stay-productive.png";
import icon_arrow from "../../assets/icon-arrow.svg";

function Benefits() {
  return (
    <article className="card__benefits">
      <article className="card__benefits_body">      
        <img src={image} alt="Stay productive" />      
        <article className="text-left p-4 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Stay productive, wherever you are
          </h2>
          <blockquote className="text-gray-400 text-base">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </blockquote>

          <blockquote className="text-gray-400 text-base">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </blockquote>

          <a href="" className="block flex text-cyan underline hover:text-white">
            See how Fylo works
            <img src={icon_arrow} alt="icon arrow" className="ml-2 w-5" />
          </a>
          
        </article>
      </article>
    </article>
  );
}

export default Benefits;
