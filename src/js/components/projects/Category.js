import React, { Component } from 'react';
import { IndexLink } from 'react-router';


class Category extends Component {
	render(){
		return(
			<ul className="category-menu">
			{this.props.links.map((link) => {
				return <li key={link.path}>
				<IndexLink activeStyle={{background: '#95c127'}} className="btn btn-default btn-sm" to={link.path}>{link.text}</IndexLink>
				</li>
			})}
			</ul>
		);
	}
}

export default Category;