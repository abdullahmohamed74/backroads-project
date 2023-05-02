import { pageLinks, socialLinls } from './data';

function Footer() {
  const renderedPageLinks = pageLinks.map(({ id, href, text }) => {
    return (
      <li key={id}>
        <a href={href} className="footer-link">
          {text}
        </a>
      </li>
    );
  });
  const renderedSocialLinks = socialLinls.map(({ id, href, icon }) => {
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
  });
  return (
    <footer className="section footer">
      <ul className="footer-links">{renderedPageLinks}</ul>
      <ul className="footer-icons">{renderedSocialLinks}</ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
