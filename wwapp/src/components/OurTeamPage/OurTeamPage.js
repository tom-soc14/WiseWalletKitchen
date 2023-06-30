import "./OurTeamPage.css";
import HeadshotNick from "./TeamPhotos/Headshot-Nick2.png";
import HeadshotKatie from "./TeamPhotos/Headshot-Katie.png";
import HeadshotBianca from "./TeamPhotos/Headshot-Bianca.png";
import HeadshotJason from "./TeamPhotos/Headshot-Jason.png";
import HeadshotWill from "./TeamPhotos/Headshot-Will.png";
import HeadshotTom from "./TeamPhotos/Headshot-Tom.png"

function OurTeamPage() {
  return (
    <div className="AboutUsPage-contents">
      <div className="AboutUs-upperbox">
        <h1>Welcome to the Wise Wallet Kitchen Team page...</h1>
        <h2>In this project we used</h2>
        <p>174 commits to main and 204 commits in all</p>


        <p>The lines of code we produced</p>
        <p>181 Trello tasks completed</p>
        <p>The programs we used:</p>


        <p>
          <img
            src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
            alt="JavaScript"
          />
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS3"
          />
          <img
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
            alt="JSON"
          />
          <img
            src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
            alt="VSCode"
          />
          <img
            src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            alt="Figma"
          />
          <img
            src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white"
            alt="Canva"
          />
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
          />

          <img
            src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
            alt="Jest"
          />

        </p>
      </div>

      <div className="AboutUs-lowerbox">
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={HeadshotNick} alt="Nick" />
              <div className="container">
                <h2>Nick Valente</h2>
                <p className="title">Big Dogg &amp; Tech Support</p>
                <p>Electrician with a passion for mountain sports.</p>
                <p>nvalente.electrics@gmail.com</p>
                <p>
                  <a
                    className="github"
                    href="https://github.com/Ice-and-Rock"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">GitHub Profile</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={HeadshotBianca} alt="Bianca" />
              <div className="container">
                <h2>Bianca Buha</h2>
                <p className="title">A true mastermind</p>
                <p>
                  With a background in theatre acting, I decided to start a
                  career in software development, as I wanted to put my
                  analytical and problem solving skills into practice.
                </p>
                <p>bianca.g.buha@gmail.com</p>
                <p>
                  <a
                    className="github"
                    href="https://github.com/bianca-g-b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">GitHub Profile</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={HeadshotTom} alt="Tom" />
              <div className="container">
                <h2>Tom Swapp</h2>
                <p className="title">Master of Code Puppets & Top Critic</p>
                <p>
                  I’ve been working in technical support for both the public
                  transport and education sector for the past few years now. I
                  wanted a way to upskill my knowledge from these areas, so I
                  decided to join the School of Code.
                </p>
                <p>tcgs@protonmail.com</p>
                <p>
                  <a
                    className="github"
                    href="https://github.com/tom-soc14"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">GitHub Profile</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={HeadshotKatie} alt="Katie" />
              <div className="container">
                <h2>Katie Smith</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>
                  As a medical doctor, I've always been passionate about making
                  a difference working clinically through COVID. I realized that
                  we all only get one life. So I decided to make the move into
                  tech to scale up the reach of those I can help.
                </p>
                <p>s.k.smith@live.co.uk</p>
                <p>
                  <a
                    className="github"
                    href="https://github.com/Ksmi23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">GitHub Profile</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={HeadshotJason} alt="Jason" />
              <div className="container">
                <h2>Jason Donoghue</h2>

                <p className="title">Chief Whip & big chess brain.</p>

                <p>
                  {" "}
                  With a strong background in supplying lighting technology to
                  the construction industry, Ive witnessed the transformative
                  power of technology first-hand, igniting my passion for being
                  a change catalyst. My true passion lies in coding, which led
                  me to enrol in the School of Codes intensive bootcamp. There,
                  I honed my problem-solving skills and discovered codings
                  ability to drive innovation. Now, driven to make a tangible
                  impact, I actively participate in tech meetups, and eager to
                  support newcomers in navigating the dynamic and ever-evolving
                  field of technology.
                </p>
                <p>jason5donoghue@gmail.com</p>
                <p>
                  <a
                    className="github"
                    href="https://github.com/Jason5D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">GitHub Profile</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={HeadshotWill} alt="Will" />
              <div className="container">
                <h2>Will Browning</h2>
                <p className="title">Coding for the revolution, my people.</p>
                <p>
                  I have a background in writing and performance. School of Code
                  not only provided an opportunity to upskill my technical
                  acumen but also offered the chance to infuse my passion for
                  storytelling in the tech industry.
                </p>
                <p>will2code0024@gmail.com</p>
                <p>
                  <a
                    className="github"
                    href="https://github.com/wbrowning01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">GitHub Profile</button>
                  </a>
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
