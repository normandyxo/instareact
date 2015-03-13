/** @jsx React.DOM */

var React = require('react');

var Header = require('../components/framework/header.jsx'),
		Search = require('../components/framework/search.jsx');

$(document).ready(function () {

	var headerIcons = [
		{
			icon: 'fa-line-chart',
			text: 'Light as a feather at ~400 lines & built with mobile in mind.'
		},
		{
			icon: 'fa-spotify',
			text: 'Styles designed to be a starting point, not a UI framework.'
		},
		{
			icon: 'fa-users',
			text: 'Quick to start with zero compiling or installing necessary.'
		}
	]
  
  React.renderComponent(
    <Header title="A dead simple, skeleton starter template." buttonUrl="#" buttonText="More Info" headerIcons={headerIcons} />,
    document.getElementById('header')
  ); 

  React.renderComponent(
    <Search />,
    document.getElementById('search')
  ); 

});