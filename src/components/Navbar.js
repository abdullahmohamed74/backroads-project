import logo from '../images/logo.svg';
import { pageLinks, socialLinls } from './data';

function Navbar() {
  const renderedPageLinks = pageLinks.map(({ id, href, text }) => {
    return (
      <li key={id}>
        <a href={href} className="nav-link">
          {text}
        </a>
      </li>
    );
  });

  const renderedSocialLinks = socialLinls.map(({ id, href, icon }) => {
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {renderedPageLinks}
        </ul>

        <ul className="nav-icons">{renderedSocialLinks}</ul>
      </div>
    </nav>
  );
}
export default Navbar;
