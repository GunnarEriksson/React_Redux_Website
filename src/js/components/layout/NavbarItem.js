import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import DropdownMenu from './DropdownMenu';

class NavbarItem extends Component {
    render() {
        return (
            <ul className={this.props.class}>
                {this.props.links.map((link) => {
                    if (!link.dropdown) {
                        return (
                            <li key={link.path}>
                                <IndexLink activeStyle={{ color: '#95c127' }} to={link.path}>{link.text}</IndexLink>
                            </li>
                        );
                    } else {
                        return (
                            <DropdownMenu key={link.dropdown.buttonName} links={link.dropdown.links} buttonName={link.dropdown.buttonName} />
                        );
                    }
                })}
            </ul>
        );
    }
}

export default NavbarItem;
