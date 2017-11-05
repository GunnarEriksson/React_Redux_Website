import React, {Component, PropTypes} from 'react';
import { IndexLink } from 'react-router';
import sanitizeHtml from 'sanitize-html';
import * as images from '../../../img/images';

class FindProjectItem extends Component {
    removeHtml(content) {
        return sanitizeHtml(content, {
            allowedTags: [],
            allowedAttributes: []
        });
    }

    getNumOfLetters(content, numOfLetters) {
        let text = this.removeHtml(content);
        let subText = text.substr(0, numOfLetters);

        if (subText.substr(subText.length - 1) !== '.' && subText.substr(subText.length - 1) !== ' ') {
            subText = subText.concat(' ...');
        }

        return subText;
    }

    render() {
        return (
            <div className="row find-project-item">
                <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                    <img className="image" alt={this.props.imageDescription} src={images[this.props.image]}/>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-5 col-lg-6 content">
                    <h4>{this.props.heading}</h4>
                    <p>
                        {this.getNumOfLetters(this.props.content, 211)}
                    </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 action">
                    <div className="action-amount text-center">
                        {this.props.amount} &euro; of {this.props.totalAmount} &euro;
                    </div>
                    <div className="action-message text-center">
                        Raised by {this.props.donaters} people in {this.props.projectTime} months
                    </div>
                    <div className="action-bar">
                        <div className='progress'>
                            <div className='progress-bar'
                                role='progressbar'
                                aria-valuenow={this.props.progress}
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{width: this.props.progress.concat('%')}}>
                                {this.props.progress}%
                            </div>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <IndexLink className="btn btn-default btn-sm button-green" to={this.props.donate}>Donate</IndexLink>
                        <IndexLink className="btn btn-default btn-sm button-green" to={this.props.read}>Read more</IndexLink>
                    </div>
                </div>
            </div>
        );
    }
}
FindProjectItem.propTypes = {
  content: PropTypes.string.isRequired
};
export default FindProjectItem;
