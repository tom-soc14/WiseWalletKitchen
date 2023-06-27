import Footer_Owl from "./Footer_Owl.png";
// import Pinterest_Icon from "./Pinterest_Icon.png";
// import Twitter_Icon from "./Twitter_Icon.png";
// import YouTube_Icon from "./YouTube_Icon.png";
import Orange_Pinterest from "./Orange_Pinterest.png";
import Orange_Youtube from "./Orange_Youtube.png";
import Orange_Twitter from "./Orange_Twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="owl-image-container">
          <img className="owl-logo" src={Footer_Owl} alt="logo" />
        </div>
        <div className="footer-links">
          <a
            id="footer-link-text"
            href="mailto:info@wisewalletkitchen.com?body=Hi there, I want to just let you know your site is awesome!"
          >
            Contact Us
          </a>
          {/* Below is going to be a Link *** */}
          <Link id="footer-link-text" to="/ourteampage">Our Team</Link>
        </div>
      </div>
      <div className="social-media-icon-box">
        <img
          className="social-media-icon"
          src={Orange_Pinterest}
          alt="pinterest button"
          onClick={() => {
            window.open("https://www.pinterest.com", "_blank");
          }}
        />

        <img
          className="social-media-icon"
          src={Orange_Twitter}
          alt="twitter button"
          onClick={() => {
            window.open("https://www.twitter.com", "_blank");
          }}
        />

        <img
          className="social-media-icon"
          src={Orange_Youtube}
          alt="youtube button"
          onClick={() => {
            window.open("https://www.youtube.com", "_blank");
          }}
        />
      </div>
    </div>
  );
}

export default Footer;

/* <div className="github-links-container">
            Created by:
            <a
              className="github-profile"
              href="https://github.com/Ksmi23"
              target="_blank"
              rel="noreferrer"
            >
              Katie
            </a>
            <a
              className="github-profile"
              href="https://github.com/wbrowning01"
              target="_blank"
              rel="noreferrer"
            >
              Will
            </a>
            <a
              className="github-profile"
              href="https://github.com/Jason5D"
              target="_blank"
              rel="noreferrer"
            >
              Jason
            </a>
            <a
              className="github-profile"
              href="https://github.com/tom-soc14"
              target="_blank"
              rel="noreferrer"
            >
              Tom
            </a>
            <a
              className="github-profile"
              href="https://github.com/Ice-and-Rock"
              target="_blank"
              rel="noreferrer"
            >
              Nick
            </a>
            <a
              className="github-profile"
              href="https://github.com/bianca-g-b"
              target="_blank"
              rel="noreferrer"
            >
              Bianca
            </a>
          </div> */
