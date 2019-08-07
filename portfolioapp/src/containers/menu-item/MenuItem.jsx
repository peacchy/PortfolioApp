import React from "react";
import { Link } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = props => {
  return (
    <div class='menu-item-link'>
      <Link to={props.to} name={props.name}>
        <div class="navbar-menu-item">{props.name}</div>
      </Link>
    </div>
  );
};

export default MenuItem;
