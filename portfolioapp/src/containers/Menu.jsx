import React, {Component} from 'react';
import MenuItem from './MenuItem';

import './Menu.css';

class Menu extends Component {
    render(){
        return(
            <ul>
                Hello I'm Darias' menu!
                <MenuItem text="Hello1"></MenuItem>
                <MenuItem text= "Hello2"></MenuItem>
            </ul>
        )
    }

}

export default Menu;