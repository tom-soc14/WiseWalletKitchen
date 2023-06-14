// import {Link} from "react-router-dom";
// // import "./NavBar.css";
// import "./NavBar.css";

// function NavBar() {
//   //add a link for each component in the navbar✅
//   //set up path for each component
//   //add className to each link✅
//   return (
//     <div className="NavBar">
//       <div className="DropdownMenu">
//         <button className="Dropbtn">Menu &#9776;</button>
//         <div className="DropdownContent">
//           <Link to="/">Homepage</Link>
//           <Link to="/kitchen">Kitchen</Link>
//           <Link to="/wallet">Wallet</Link>
//           <Link to="/login">Login</Link>
//           </div>
//         </div>
//     </div>
//   );
// }




// export default NavBar;

import {Link} from "react-router-dom";
// import "./NavBar.css";
import "./NavBar.css";


function NavBar() {
  //add a link for each component in the navbar:white_check_mark:
  //set up path for each component:white_check_mark:
  //add className to each link:white_check_mark:
  return (
    <div className="NavBar">
      <div className="DropdownMenu">
        <button className="Dropbtn">Menu &#9776;</button>
        <div className="DropdownContent">
          <Link className="navbar-component" to="/">Homepage</Link>
          <Link className="navbar-component" to="/kitchen">Kitchen</Link>
          <Link className="navbar-component" to="/wallet">Wallet</Link>
          <Link className="navbar-component" to="/login">Login</Link>
          </div>
        </div>
    </div>
  );
}
export default NavBar;

