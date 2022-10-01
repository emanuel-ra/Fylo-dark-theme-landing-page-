import icon_any_file from "../../assets/icon-any-file.svg";
import icon_collaboration from "../../assets/icon-collaboration.svg";
import icon_security from "../../assets/icon-security.svg";
import icon_access_anywhere from "../../assets/icon-access-anywhere.svg";

function Offers() {
  return (
    <article className="card__offers">
      <article className="card__offers__body lg:mt-24">
        <article>
          <img src={icon_access_anywhere} alt="Access your files, anywhere" />
          <h2>Access your files, anywhere</h2>
          <blockquote>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </blockquote>
        </article>

        <article>
          <img src={icon_security} alt="Security you can trus" />
          <h2>Security you can trust</h2>
          <blockquote>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </blockquote>
        </article>

        <article>
          <img src={icon_collaboration} alt="Real-time collaboration" />
          <h2>Real-time collaboration</h2>
          <blockquote>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </blockquote>
        </article>
        <article>
          <img src={icon_any_file} alt="Store any type of file" />
          <h2>Store any type of file</h2>
          <blockquote>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </blockquote>
        </article>
      </article>
    </article>
  );
}

export default Offers;
