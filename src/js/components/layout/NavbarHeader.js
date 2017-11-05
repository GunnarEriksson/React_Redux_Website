import React, { Component } from 'react';
import logo from '../../../img/header/logo.png';

class NavbarHeader extends Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand navbar-brand-centered"><img className="logo" alt="Greenbay logo" src={logo} /></div>
            </div>
        );
    }
}

export default NavbarHeader;
