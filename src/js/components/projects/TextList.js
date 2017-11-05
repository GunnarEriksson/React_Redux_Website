import React, {Component} from 'react';
import TextItem from './TextItem';

class TextList extends Component {

    render() {
        return (
            <div className="project-info-description">
                {this.props.descriptions.map((description, index) => {
                    return (
                        <TextItem
                            key={index}
                            content={description.text}
                        />
                    );
                })}
            </div>
        );
    }
}
TextList.defaultProps = {
    description: []
};

export default TextList;
