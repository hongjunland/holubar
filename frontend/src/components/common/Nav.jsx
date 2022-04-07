import * as React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Button, Menu, MenuItem } from "@mui/material";

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
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
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon color="primary" fontSize="large" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem>LogIn</MenuItem>
              </Menu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
