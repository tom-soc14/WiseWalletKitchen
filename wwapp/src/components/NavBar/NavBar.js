import { Link } from "react-router-dom";
import Owl from './WWK_Logo_Large.png';

function NavBar({logInAccess, handleLogOut}) {
  //add a link for each component in the navbar:white_check_mark:
  //set up path for each component:white_check_mark:
  //add className to each link:white_check_mark:

  //NEW - Add a function that takes in the click of the Logout button. Passes props up ✅
  function handleLogOutClick() {
    handleLogOut()
  }

  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={Owl} alt="Owl in chefs hat"></img>
      </div>

      <div className="DropdownMenu">
        <button className="Dropbtn"> &#9776;</button>
        <div className="DropdownContent">

{/* NEW - Render conditional statements for login ✅ */}
{/* NEW - Render conditional statements for logIN ✅ */}
{/* NEW - Render conditional statement with Access to Wallet ✅ */}
{/* NEW - Render conditional statement with Access to Wallet ✅ */}
          <Link className="navbar-component" to="/">Homepage</Link>
          <Link className="navbar-component" to="/about">About us</Link>
          {logInAccess && <Link className="navbar-component" to="/kitchen">Kitchen</Link>}
          {logInAccess && <Link className="navbar-component" to="/wallet">Wallet</Link>}
          {!logInAccess && <Link className="navbar-component" to="/login">Login</Link>}
          {logInAccess && <Link onClick={handleLogOutClick}>Logout</Link>}
          </div>

        </div>
      </div>
    
  );
}
export default NavBar;

