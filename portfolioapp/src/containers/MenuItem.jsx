import React, {Component} from 'react';

import './MenuItem.css';

const MenuItem = (props) => {
        return(
            <li>
                {props.text}
            </li>
        )
}

export default MenuItem;