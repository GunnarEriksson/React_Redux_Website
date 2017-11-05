import React, { Component } from 'react';
import FooterLink from './FooterLink';

class FooterLinkList extends Component {
    render() {
        return (
            <div>
                {this.props.links.map((link, index) => {
                    return <FooterLink key={index} text={link.text} href={link.href} />
                })}
            </div>
        )
    }
}
FooterLinkList.defaultProps = {
    links: []
};
export default FooterLinkList;
