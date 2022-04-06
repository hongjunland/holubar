import "./Nav.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Nav() {
  return (
    <div className="header">
      {/* <div className="Navbar--left"><div><Link to="/">Holubar</Link></div></div>
            <ul className="Navbar--containerList">
                <div>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/market">Market</Link></li>
                    <li><Link to="/ranking">Rankings</Link></li>
                </div>
                <div>
                    <li><Link to="/profile">Profile</Link></li>
                </div>
            </ul> */}
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img
              src="/logo.png"
              style={{ display: "flex", width: "40px", margin: "25px" }}
            ></img>
            <span>Holubar</span>
          </div>
        </Link>
        <ul className="nav">
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/Market">Market</Link>
          </li>
          <li>
            <Link to="/Ranking">Rankings</Link>
          </li>
          <li>
            <Link to="/profile">
              {/* <a>Profile</a> */}
              <AccountCircleIcon color="primary" fontSize="large" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
