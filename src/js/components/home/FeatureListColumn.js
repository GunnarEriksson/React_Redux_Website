import React, {Component} from 'react';
import FeatureItem from './FeatureItem';

class FeatureListColumn extends Component {

    render() {
        return (
            <div className="row feature-list-column">
                { this.props.features.map((feature, index) => {
                    return (
                        <FeatureItem
                            key={index}
                            image={feature.topDonateImg}
                            imageDescription={feature.topImgAlt}
                            icon={feature.icon}
                            iconDescription={feature.iconAlt}
                            heading={feature.project}
                            content={feature.content}
                            amount={feature.amount}
                            totalAmount={feature.totalAmount}
                            progress={feature.progress}
                            donate={feature.donate}
                            read={feature.read}
                        />
                    );
                })
            }
        </div>
    );
}
}
FeatureListColumn.defaultProps = {
    features: []
};
export default FeatureListColumn;
