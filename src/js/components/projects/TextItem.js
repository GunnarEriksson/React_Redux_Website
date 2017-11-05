import React, { Component, PropTypes } from 'react';

class TextItem extends Component {
    render() {
        return (
            <div className="row text-item">
                {this.props.content}
            </div>
        );
    }
}
TextItem.propTypes = {
  content: PropTypes.string.isRequired
};

export default TextItem;
