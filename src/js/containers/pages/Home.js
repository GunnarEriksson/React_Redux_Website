import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjects } from '../../actions/ProjectActions';
import Features from '../../components/home/Features';
import Partners from '../../components/home/Partners';
import YoutubeBlock from '../../components/home/YoutubeBlock';
import Facebook from '../../components/home/Facebook';
import DownloadApp from '../../components/home/DownloadApp';

class Home extends Component {
    componentWillMount() {
        this.props.getProjects();
    }

    render() {
        const partners = [
            {
                "image": require('../../../img/partners/01_unicef.png'),
                "alt": "Unicef"
            },
            {
                "image": require('../../../img/partners/02_red_cross.jpg'),
                "alt": "Red Cross"
            },
            {
                "image": require('../../../img/partners/03_amnesty.jpg'),
                "alt": "Amnesty International"
            },
            {
                "image": require('../../../img/partners/04_save_children.jpg'),
                "alt": "Save Children Foundation"
            },
            {
                "image": require('../../../img/partners/05_wwf.gif'),
                "alt": "WWF"
            },
            {
                "image": require('../../../img/partners/06_charity.jpg'),
                "alt": "Charity"
            },
            {
                "image": require('../../../img/partners/07_sida.jpg'),
                "alt": "Sida"
            },
            {
                "image": require('../../../img/partners/08_world_health.png'),
                "alt": "World Health Originization"
            }
        ];

        let features = this.props.projects;

        return (
            <div className="home">
                <section className="banner">
                    <div className="banner-container">
                        <img className="banner-container-image" src={require('../../../img/home/banner.gif')} alt="Waterfall in a rainforest" />
                        <img className="banner-container-logo" src={require('../../../img/header/logo.png')} alt="The Greenbay logo" />
                    </div>
                </section>
                <section className="content">
                    <Features features={features}/>
                    <Partners partners={partners}/>
                    <div className="row us">
                        <div className="col-xs-12 col-xs-offset-0">
                            <div className="row us-wrapper">
                                <YoutubeBlock />
                                <Facebook />
                            </div>
                        </div>
                    </div>
                    <DownloadApp />
                </section>
            </div>
        );
    }
}

function mapStateToProps({ projects }) {
    return { projects };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProjects }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
