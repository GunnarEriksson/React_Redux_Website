import React, { Component } from 'react';
import Navbar from './Navbar';
import NavbarHeader from './NavbarHeader';
import FooterLinkList from './FooterLinkList';
import SubscribeForm from './SubscribeForm';

class PageLayout extends Component {
    render() {
        const links = [
            {
                "href": "#",
                "text": 'How it works'
            },
            {
                "href": "#",
                "text": 'Press'
            },
            {
                "href": "#",
                "text": 'Contact'
            },
            {
                "href": "#",
                "text": 'Terms and conditions'
            }
        ];

        const menuItemsLeft = [
            {
                path: '/',
                text: 'Home'
            },
            {
                path: '/start_project',
                text: 'Start project'
            },
            {
                path: '/find_project',
                text: 'Find project'
            }
        ];

        const menuItemsRight = [
            {
                dropdown: {
                    buttonName: "Donate",
                    links: [
                        {
                            path: '/give_once',
                            text: 'Give once'
                        },
                        {
                            path: '/become_member',
                            text: 'Become a member'
                        },
                        {
                            path: '/support_project',
                            text: 'Support entire project'
                        }
                    ]
                }
            },
            {
                path: '/sign_in',
                text: 'Sign in'
            }
        ];

        return (
            <div className="container-fluid layout">
                <div className="layout-header">
                    <div className="navbar navbar-default">
                        <div className="container-fluid">
                            <NavbarHeader />
                            <Navbar menuItemsLeft={menuItemsLeft} menuItemsRight={menuItemsRight} />
                        </div>
                    </div>
                </div>
                <div className="layout-content">
                    {this.props.children}
                </div>
                <div className="layout-footer">
                    <footer className="row">
                        <div className="footer">
                            <div className="col-xs-12 col-sm-2">
                                <div className="row footer-links">
                                    <div className="col-sm-12 hidden-xs">
                                        <FooterLinkList links={links} />
                                    </div>
                                    <div className="col-xs-12 visible-xs-block text-center">
                                        <FooterLinkList links={links} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-7 social-media text-center">
                                <a href="#"><i className="fa fa-envelope-o"></i></a>
                                <a href="#"><i className="fa fa-phone"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <SubscribeForm />
                                <p className="copyright">Copyrights 2017 Green Bay Funding</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default PageLayout;
