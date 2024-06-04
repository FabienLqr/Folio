import githubImg from "../assets/Svg/github.svg";
import linkedinImg from "../assets/Svg/linkedin.svg";

function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/FabienLqr"
          className="footLink"
          target="_blank"
        >
          <img src={githubImg} className="footImg" />
        </a>
        <span className="footSpan">GitHub</span>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/fabien-laquerriere/"
          className="footLink"
          target="_blank"
        >
          <img src={linkedinImg} className="footImg" />
        </a>
        <span className="footSpan">Linkedin</span>
      </p>
    </footer>
  );
}

export default Footer;
