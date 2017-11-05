import React, {Component} from 'react';

class SearchBar extends Component {

	render(){
		return(
			<div className="searchbar">
				<select>
					<option defaultValue="sortedby">Sorted by</option>
					<option value="newest">Newest</option>
					<option value="oldest">Oldest</option>
					<option value="mostfunded">Most funded</option>
				</select>
				<input type="text" placeholder="Search" />
				<span className="fa fa-search" />
			</div>
		);
	}
}

export default SearchBar;