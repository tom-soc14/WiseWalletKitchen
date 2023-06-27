import "./OurTeamPage.css"
import MaryBerryHOTTT from './MaryBerryHOTTT.jpg'

function OurTeamPage () {
    return (

<div className="AboutUsPage-contents">
<div className="AboutUs-upperbox">
    <title>Welcome to the Wise Wallet Kitchen Team page...</title>
    <h1>In this project we used...</h1>
    <p>number of Github commits</p>
    <p>the software we used</p>
    <p>the number of programmes we used</p>
    <p>the lines of code we produced</p>
    </div>


    <div className="AboutUs-lowerbox">

    <div class="row">
  <div class="column">
    <div class="card">
      <img src={MaryBerryHOTTT} alt="Jane" />
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={MaryBerryHOTTT} alt="Mike" />
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={MaryBerryHOTTT} alt="John" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>



  <div class="column">
    <div class="card">
      <img src={MaryBerryHOTTT} alt="Jane" />
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={MaryBerryHOTTT} alt="Mike" />
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={MaryBerryHOTTT} alt="John" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>


        {/* <div className="OurTeam-contents">
            <div className="OurTeam-Box">
                <p>Katie</p>
            </div>
            <div className="OurTeam-Box">
                <p>Nick</p>
            </div>
            <div className="OurTeam-Box">
                <p>Tom</p>
            </div>
            <div className="OurTeam-Box">
                <p>Bianca</p>
            </div>
            <div className="OurTeam-Box">
                <p>Will</p>
            </div>
            <div className="OurTeam-Box">
                <p>Jason</p>
            </div>
        </div> */}
    </div>
</div>

    )
}

export default OurTeamPage