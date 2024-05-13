import html from "../assets/Svg/html-5.svg";
import css from "../assets/Svg/css-3.svg";
import javaScript from "../assets/Svg/js.svg";
import reactSvg from "../assets/Svg/react.svg";
import sass from "../assets/Svg/sass.svg";
import threeJs from "../assets/Svg/three-js.svg";
import git from "../assets/Svg/git.svg";
import gitHub from "../assets/Svg/github.svg";

function Techno() {
  return (
    <>
      <ul>
        <li>
          <img src={html} className="svgImg" alt="logo svg de HTML" />
          HTML
        </li>
        <li>
          <img src={css} className="svgImg" alt="logo svg de CSS" />
          CSS
        </li>
        <li>
          <img src={javaScript} className="svgImg" alt="logo svg de JS" />
          JavaScript
        </li>
        <li>
          <img src={reactSvg} className="svgImg" alt="logo svg de React" />
          React
        </li>
        <li>
          <img src={sass} className="svgImg" alt="logo svg de Sass" />
          Sass
        </li>
        <li>
          <img src={threeJs} className="svgImg" alt="logo svg de three.js" />
          Three.js
        </li>
        <li>
          <img src={git} className="svgImg" alt="logo svg de git" />
          Git
        </li>
        <li>
          <img src={gitHub} className="svgImg" alt="logo svg de GitHub" />
          GitHub
        </li>
      </ul>
    </>
  );
}

export default Techno;
