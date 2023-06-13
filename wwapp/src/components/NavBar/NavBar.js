import {Link} from "react-router-dom";
// import "./NavBar.css";
import "./NavBar.css";


function NavBar() {
  //add a link for each component in the navbar✅
  //set up path for each component
  //add className to each link✅
  return (
    <div className="NavBar">
     <Link className="NavBar_Component" to="/">Homepage</Link>
      <Link className="NavBar_Component" to="/kitchen">Kitchen</Link>
      <Link className="NavBar_Component" to="/wallet">Wallet</Link>
      <Link className="NavBar_Component" to="/login">Login</Link>
    </div>
  );
}



export default NavBar;