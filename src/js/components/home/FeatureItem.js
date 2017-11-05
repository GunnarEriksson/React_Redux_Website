import React, {Component, PropTypes} from 'react';
import { IndexLink } from 'react-router';
import sanitizeHtml from 'sanitize-html';
import * as images from '../../../img/images';

class FeatureItem extends Component {
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
            <div className="col-xs-10 col-xs-offset-0 col-sm-3 col-sm-offset-0 text-center feature-item">
                <div className="item">
                    <div className="item-image">
                        <img className="feature-image" alt={this.props.imageDescription} src={images[this.props.image]}/>
                        <img className="feature-icon" alt={this.props.iconDescription} src={images[this.props.icon]}/>
                    </div>
                    <div className="item-text">
                        <h4>{this.props.heading}</h4>
                        <p>
                            {this.getNumOfLetters(this.props.content, 211)}
                        </p>
                    </div>
                    <div className="item-action">
                        <div className="amount text-center">
                            {this.props.amount} &euro; of {this.props.totalAmount} &euro;
                        </div>
                        <div className="bar">
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
                        <div className="buttons">
                            <IndexLink className="btn btn-default btn-sm button-green" to={this.props.donate}>Donate</IndexLink>
                            <IndexLink className="btn btn-default btn-sm button-green" to={this.props.read}>Read more</IndexLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
FeatureItem.propTypes = {
  content: PropTypes.string.isRequired
};
export default FeatureItem;
