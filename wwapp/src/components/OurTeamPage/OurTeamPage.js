import "./OurTeamPage.css";
import HeadshotNick from "./TeamPhotos/Headshot-Nick2.png";
import HeadshotKatie from "./TeamPhotos/Headshot-Katie.png";
import HeadshotBianca from "./TeamPhotos/Headshot-Bianca.png";
import HeadshotJason from "./TeamPhotos/Headshot-Jason.png";
import HeadshotWill from "./TeamPhotos/Headshot-Will.png";
import bianca from "./Otherphotos/bianca.png";
import tom from "./Otherphotos/tom.png";
import nick from "./Otherphotos/nick.png";
import katie from "./Otherphotos/katie.png";
import jason from "./Otherphotos/jason.png";
import will from "./Otherphotos/will.png"

function OurTeamPage() {
  return (
    <div className="AboutUsPage-contents">
      <div className="AboutUs-upperbox">
                <h1>Welcome to the Wise Wallet Kitchen Team page...</h1>
                <h2>In this project we used</h2>
                <p>174 commits to main and 204 commits in all</p>
                <p>the lines of code we produced</p>
                <p>the programs we used</p>
                  <p>
                    <img
                      src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
                      alt="JavaScript"
                    />
                    <img
                      src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
                      alt="CSS3"
                    />
                    <img
                      src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
                      alt="React"
                    />
                    <img
                      src='https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white'
                      alt="JSON"
                    />
                    <img
                      src='https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white'
                      alt="VSCode"
                    />
                    <img
                      src='https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'
                      alt="Figma"
                    />
                    <img
                      src='https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white'
                      alt="Canva"
                    />
                    <img
                      src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
                      alt="GitHub"
                    />
                   
               
                  
                  <img
                    src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'
                    alt="Jest"
                  />
                
                </p>
        </div>
      

      <div className="AboutUs-lowerbox">
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={nick} alt="Nick" />
              <div className="container">
                <h2>Nick Valente</h2>
                <p className="title">Big Dogg &amp; Tech Support</p>
                <p>Electrician with a passion for mountain sports.</p>
                <p>nvalente.electrics@gmail.com</p>
                <p>
                  <button
                    className="button"
                    onClick={() => {
                      window.open(
                        "mailto:nvalente.electrics@gmail.com",
                        "_Hey Nick, Just wanted to say I really enjoyed the site"
                      );
                    }}
                  >
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={bianca} alt="Bianca" />
              <div className="container">
                <h2>Bianca Buha</h2>
                <p className="title">The true mastermind</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={tom} alt="Tom" />
              <div className="container">
                <h2>Tom Swapp</h2>
                <p className="title">Delete Master & Top Critic</p>
                <p>The knower of all API knowledge and wild theories</p>
                <p>tomswapp@example.com</p>
                <p>
                  <button
                    className="button"
                    href="mailto:nvalente.electrics@gmail.com?body=Hi there, I want to just let you know your site is awesome!"
                  >
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={katie} alt="Katie" />
              <div className="container">
                <h2>Katie Smith</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={jason} alt="Jason" />
              <div className="container">
                <h2>Jason Donehue</h2>
                <p className="title">Chief Whip & big brain</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={will} alt="Will" />
              <div className="container">
                <h2>Will Browning</h2>
                <p className="title">Leader & freedom fighter</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

       
        </div>
      </div>
      
   
  );
}

export default OurTeamPage;
