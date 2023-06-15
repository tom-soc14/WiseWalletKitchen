import { Link } from "react-router-dom";
// import "./NavBar.css";
// import "./NavBar.css";

function NavBar() {
  //add a link for each component in the navbar✅
  //set up path for each component
  //add className to each link✅
  return (
    <div>
      <div className="Logo">
        <h1>Wise Wallet Kitchen</h1>
      </div>
      
      <div className="DropdownMenu">
        <button className="Dropbtn"> &#9776;</button>
        <div className="DropdownContent">
          <Link to="/">Homepage</Link>
          <Link to="/kitchen">Kitchen</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
