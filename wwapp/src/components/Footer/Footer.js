import owlLogo from "./owl-tiny.png"

function Footer() {
    return(
        <div className="footer-container">
            <footer>
            
            <div className = "inside-footer-container">
            
            {/* <p>Smart Eating and Savings</p> */}
            <img className="owl-logo" src={owlLogo} alt="logo" />
            
            <div className="github-links-container">Created by:
            <a className = "github-profile" href="https://github.com/Ksmi23" target="_blank" rel="noreferrer">Katie</a>
            <a className = "github-profile" href="https://github.com/wbrowning01" target="_blank" rel="noreferrer">Will</a>
            <a className = "github-profile" href="https://github.com/Jason5D" target="_blank" rel="noreferrer">Jason</a>
            <a className = "github-profile" href="https://github.com/tom-soc14" target="_blank" rel="noreferrer">Tom</a>
            <a className = "github-profile" href="https://github.com/Ice-and-Rock" target="_blank" rel="noreferrer">Nick</a>
            <a className = "github-profile" href="https://github.com/bianca-g-b" target="_blank" rel="noreferrer">Bianca</a>
            </div>
            </div>
      </footer>
        </div>
    )
}

export default Footer;