import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjects } from '../../actions/ProjectActions';
import Categories from '../../components/projects/Categories';
import SearchBar from '../../components/projects/SearchBar';
import Projects from '../../components/find_projects/Projects';

class FindProject extends Component {
	componentWillMount() {
        this.props.getProjects();
    }

	render() {
		const categories = [
		{
			"image": require('../../../img/icons/environment.png'),
			"alt": "environmental",
			"text": "Environmental"
		},
		{
			"image": require('../../../img/icons/animals.png'),
			"alt": "animal",
			"text": "Animal"
		},
		{
			"image": require('../../../img/icons/charity.png'),
			"alt": "Charity",
			"text": "Charity"
		},
		{
			"image": require('../../../img/icons/education.png'),
			"alt": "education",
			"text": "Education"
		},
		{
			"image": require('../../../img/icons/medical.png'),
			"alt": "World Health Originization",
			"text": "Medical"
		},
		{
			"image": require('../../../img/icons/emergency.png'),
			"alt": "Save Children Foundation",
			"text": "Emergency"
		},
		{
			"image": require('../../../img/icons/industry.png'),
			"alt": "industry projects",
			"text": "Industry"
		},
		{
			"image": require('../../../img/icons/sea.png'),
			"alt": "sea projects",
			"text": "Sea"
		},
		{
			"image": require('../../../img/icons/science.png'),
			"alt": "science projects",
			"text": "Science"
		},
		{
			"image": require('../../../img/icons/innovation.png'),
			"alt": "Sida",
			"text": "Innovation"
		},
		{
			"image": require('../../../img/icons/sport.png'),
			"alt": "Human Watch",
			"text": "Sport"
		},
		];

		let features = this.props.projects;
		return (
            <div className="find-project">
                <section className="banner">
                    <div className="banner-container">
                        <img className="banner-container-image" src={require('../../../img/projects/projectsbanner.jpg')} alt="White flower" />
                        <div className="banner-container-text">Find a project</div>
                    </div>
                </section>
                <section className="content">
                	<Categories categories={categories} />
                    <SearchBar />
                    <Projects features={features} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FindProject);
