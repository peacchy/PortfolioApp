import React from "react";
import {Link} from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = props => {
  return (
    <Link to={props.to} name={props.name}>
      <div class="navbar-menu-item">
        {props.name}
      </div>
    </Link>
  );
};

export default MenuItem;
