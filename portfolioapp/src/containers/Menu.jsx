import React, { Component } from "react";
import MenuItem from "./menu-item/MenuItem";
import { Link } from "react-router-dom";

import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div class="topnav">
        <Link to="/" name="Home">
          <MenuItem text="Home" />
        </Link>
        <Link to="/dummy" name="Dummy">
          <MenuItem text="Dummy" />
        </Link>
      </div>
    );
  }
}

export default Menu;
