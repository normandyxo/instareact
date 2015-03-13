/** @jsx React.DOM */

var React = require('react');

var Nav = React.createClass({

	render: function() {

		return (
			<div id="navigationContainer">
				<div className="navbar-spacer"></div>
		    <nav className="navbar">
		      <div className="container">
		        <ul className="navbar-list">
		          <li className="navbar-item"><a className="navbar-link" href="#intro">Intro</a></li>
		          <li className="navbar-item"><a className="navbar-link" href="#examples">Examples</a></li>
		          <li className="navbar-item">
		            <a className="navbar-link" href="#" data-popover="#moreNavPopover">More</a>
		            <div id="moreNavPopover" className="popover">
		              <ul className="popover-list">
		                <li className="popover-item">
		                  <a className="popover-link" href="https://github.com/dhg/Skeleton">On Github</a>
		                </li>
		              </ul>
		            </div>
		          </li>
		        </ul>
		      </div>
		    </nav>
		  </div>
		);
	}

});

module.exports = Nav;