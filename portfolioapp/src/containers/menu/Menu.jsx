import React, { Component } from "react";
import MenuItem from "../../components/menu-item/MenuItem";

import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div class="topnav">
        <MenuItem to="/" name="Home" />
      </div>
    );
  }
}

export default Menu;
