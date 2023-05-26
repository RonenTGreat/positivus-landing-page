import logo from "../../assets/logo.png";
import "./header.styles.css"

const Header = () => {
  return (
    <>
      <header>
        <a href="/.">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Use Cases
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Blog
              </a>
            </li>
            <a href="/#">Request a quote</a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
