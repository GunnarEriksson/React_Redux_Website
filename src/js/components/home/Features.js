import React, {Component} from 'react';
import FeatureListRow from './FeatureListRow';
import FeatureListColumn from './FeatureListColumn';

class Features extends Component {

    render() {
        return (
            <section className="row features">
                <div className="col-sm-12 col-sm-offset-0 hidden-xs typography">
                    <h1>Featured projects</h1>
                    <FeatureListRow features={this.props.features} />
                </div>
                <div className="col-xs-12 col-xs-offset-0 visible-xs-block typography">
                    <h1>Featured projects</h1>
                    <FeatureListColumn features={this.props.features} />
                </div>
            </section>
        );
    }
}

export default Features;
