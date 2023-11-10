import heart from '../images/ico-heart.svg';
import linkedin from '../images/ico-linkedin.svg';
import github from '../images/ico-github.svg';
import twitter from '../images/ico-twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <small>&copy; 2023</small>
        <img src={heart} alt="heart icon" title="heart icon" />
        <p>Lara R. Poblet</p>
      </div>
      <nav className="social">
        <ul className="social__ul">
          <li>
            <a
              href="https://www.linkedin.com/in/lararamospoblet/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" title="linkedin icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lrpoblet"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github icon" title="github icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lrpoblet"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter icon" title="twitter icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
