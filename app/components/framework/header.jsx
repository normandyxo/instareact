/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({

	render: function() {

		var titleStyle = {
			color: "#808080"
		}

		var headerIcons;

		if (this.props.headerIcons) {

			headerIcons = this.props.headerIcons.map(function (icon, i) {
				return (

					<div key={i} className="four columns value-prop">
	          <i className={"fa " + icon.icon + " fa-5x value-img"} style={titleStyle}/>
	          {icon.text}
	        </div>
	        
				)
			})

		}

		return (

			<section className="header">
				<h2 className="title">{this.props.title}</h2>
	      <a className="button button-primary" href={this.props.buttonUrl}>{this.props.buttonText}</a>
	      <div className="value-props row">
	        {headerIcons}
	      </div>
	    </section>

		);
	}

});

module.exports = Header;