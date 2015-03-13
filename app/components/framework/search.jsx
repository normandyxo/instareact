/** @jsx React.DOM */

var React = require('react');

var Search = React.createClass({

	render: function() {
		
		return (

			<div id="searchContainer">
				<div className="row">
					<div className="ten columns">
						<input className="u-full-width" type="text" placeholder="Search..." id="searchInput" />
					</div>
					<div className="two columns">
						<input className="button-primary" type="submit" value="Search" />
					</div>
				</div>
			</div>
			
		);

	}

});

module.exports = Search;