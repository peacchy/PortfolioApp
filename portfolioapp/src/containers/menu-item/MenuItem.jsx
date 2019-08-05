import React from "react";

import "./MenuItem.scss";

const MenuItem = props => {
  return (
    <div class="navbar-menu-item">
      {props.text}
    </div>
  );
};

export default MenuItem;
