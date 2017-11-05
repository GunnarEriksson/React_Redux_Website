import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IndexLink } from 'react-router';
import sanitizeHtml from 'sanitize-html';
import { getProject } from '../../actions/ProjectActions';
import * as images from '../../../img/images';

class Project extends Component {
    componentWillMount() {
        this.props.getProject(this.props.params.pathParam);
    }

    componentWillUpdate(nextProps) {
        this.props.getProject(nextProps.params.pathParam);
    }

    render() {
        let project = this.props.project;

        var sanitizedHtml = sanitizeHtml(project.content, {
            allowedClasses: {
                'div': [ 'green-text', 'padding-top-20', 'hidden-xs', 'hidden-sm' ]
            }
        });

        return (
            <section className="project" style={{ backgroundImage: "url(" + images[project.backgroundImage] + ")" }} >
                <div className="row project-wrapper">
                    <img className="icon" src={images[project.icon]} alt={project.iconAlt} />
                    <div className="project-bar clearfix">
                        <div className="pull-right">
                            <IndexLink className="project-donate-next" to={project.nextProject}>Next project ></IndexLink>
                        </div>
                    </div>
                    <div className="project-info col-xs-12 col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                        <div className="text-header">
                            {project.title}
                        </div>
                        <div className="project-info-description" dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
                    </div>
                    <div className="project-donate col-xs-12 col-sm-10 col-sm-offset-1 col-md-5 col-md-offset-0">
                        <div>
                            <img className="facebook_icon pull-right" src={images["icon_facebook"]} alt="The facebook icon" />
                            <img className="tweet_icon pull-right" src={images["icon_tweet"]} alt="The tweet icon" />
                        </div>
                        <div className="project-donate-content">
                            <div className="project-donate-container">
                                <img className="project-donate-container-image" src={images[project.topDonateImg]} alt={project.topDonateImgAlt} />
                                <img className="project-donate-container-logo" src={images[project.logo]} alt={project.logoAlt} />
                            </div>
                            <div className="project-donate-amount text-center">
                                {project.amount} &euro; of {project.totalAmount} &euro;
                            </div>
                            <div className="project-donate-message text-center">
                                Raised by {project.donaters} people in {project.projectTime} months
                            </div>
                            <div className="row project-donate-wrapper">
                                    <div className='col-xs-10 col-xs-offset-1 progress'>
                                        <div className='progress-bar'
                                            role='progressbar'
                                            aria-valuenow='25'
                                            aria-valuemin='0'
                                            aria-valuemax='100'
                                            style={{width: project.progress + '%'}}>
                                            {project.progress}%
                                        </div>
                                    </div>
                            </div>
                            <div className="project-donate-button text-center">
                                <IndexLink className="btn btn-default btn-lg button-green" to={project.donate}>Donate</IndexLink>
                            </div>
                            {
                                (project.bottomDonateImg !== undefined) &&
                                <div className="row project-donate-second-image">
                                    <div className="hidden-sm hidden-xs">
                                        <img className="project-donate-container-image" src={images[project.bottomDonateImg]} alt={project.bottomDonateImgAlt} />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        (project.projectImg !== undefined) &&
                        <div className="row project-image">
                            <div className="hidden-sm hidden-xs">
                                <img src={images[project.projectImg]} alt={project.projectImgAlt} />
                            </div>
                        </div>
                    }
                </div>
            </section>
        );
    }
}

function mapStateToProps({ project }) {
    return { project };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
