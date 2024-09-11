import './Home.css';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';

import CSCode from "../images/cs-code-logo.svg";
import HTML5Icon from "../images/icons/icon-html5.svg";
import CSS3Icon from "../images/icons/icon-css3.svg";
import TSIcon from "../images/icons/icon-typescript.svg";
import ReactIcon from "../images/icons/icon-react.svg";
import ViteIcon from "../images/icons/icon-vite.svg";
import FirebaseIcon from "../images/icons/icon-firebase.svg";
import GitHubIcon from "../images/icons/icon-github.svg";

export default function App() {
  return (
    <>
      <Helmet>
        <title>CS-Code</title>
      </Helmet>
      <div className="index-container">
        <img
          src={CSCode}
          alt="cs-code-logo"
          className="cs-code-logo"
        />
        <div className='index-text'>
          <div className='index-text-header'>
            <h1>PERSÖNLICHER BLOG</h1>
            <h2>von Christian Sulzinger</h2>
          </div>
          <br />
          <p>
            Um mich selbst und meine Kenntnisse im <b>Web Development</b> weiter zu stärken und voranzubringen,
            habe ich mich für einen <b>persönlichen Blog</b> entschieden.
          </p>
          <p>Hier entstehen meine <b>Projekte</b> durch die Verwendung von:</p>
          <ul className='tech-list'>
            <li><img src={HTML5Icon} alt="html5-icon" className='icon-small' /> <b>HTML</b></li>
            <li><img src={CSS3Icon} alt="css3-icon" className='icon-small' /> <b>CSS</b></li>
            <li><img src={TSIcon} alt="typescript-icon" className='icon-small' /> <b>TypeScript</b></li>
            <li><img src={ReactIcon} alt="react-icon" className='icon-small' /> <b>React</b></li>
            <li><img src={ViteIcon} alt="vite-icon" className='icon-small' /> <b>Vite</b></li>
            <li><img src={FirebaseIcon} alt="firebase-icon" className='icon-small' /> <b>Firebase</b></li>
            {/* <li><img src={GitHubIcon} alt="firebase-icon" className='icon-small' /> <b>GitHub</b></li> */}
          </ul>
          <a href='https://github.com/ChrisSulz/CSCode' target="_blank" rel="noopener noreferrer" className="github-link">
            <button className='button-github'>
              <img src={GitHubIcon} alt="github-icon" className='icon-small' /> GitHub Repository
            </button>
          </a>
        </div>
      </div>
    </>
  );
}