
import { Link } from "react-router-dom";

function NavBar() {
  //add a link for each component in the navbar:white_check_mark:
  //set up path for each component:white_check_mark:
  //add className to each link:white_check_mark:
  return (
    <div className="NavBar">
      <div className="Logo">
        <h1>Wise Wallet Kitchen</h1>
        <p>Smart Eating and Savings...</p>
      </div>

      <div className="DropdownMenu">
        <button className="Dropbtn"> &#9776;</button>
        <div className="DropdownContent">

          <Link className="navbar-component" to="/">Homepage</Link>
          <Link className="navbar-component" to="/about">About us</Link>
          <Link className="navbar-component" to="/kitchen">Kitchen</Link>
          <Link className="navbar-component" to="/wallet">Wallet</Link>
          <Link className="navbar-component" to="/login">Login</Link>
          </div>

        </div>
      </div>
    
  );
}
export default NavBar;
