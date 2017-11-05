import React, {Component, PropTypes} from 'react';

class FooterLink extends Component {
    render() {
        return (
            <p><a href={this.props.href}>{this.props.text}</a></p>
        )
    }
}
FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
export default FooterLink ;
