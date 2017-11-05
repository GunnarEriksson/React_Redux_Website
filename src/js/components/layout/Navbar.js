import React, { Component } from 'react';
import NavbarItem from './NavbarItem';

class Navbar extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <NavbarItem class="nav navbar-nav" links={this.props.menuItemsLeft} />
                <NavbarItem class="nav navbar-nav navbar-right" links={this.props.menuItemsRight} />
            </div>
        );
    }
}

export default Navbar;
