const React = require('react');

const Header = props => (
	<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container-fluid">
			<div className="navbar-header">
				<a className="navbar-brand" href={props.app_data.app_url}>{props.app_data.app_name}</a>
			</div>
			<ul className="nav navbar-nav navbar-right">
				<li><a href={props.app_data.lab_url}>{props.app_data.lab_name}</a></li>
				<li><a href={props.app_data.contact}>Contact</a></li>
			</ul>
		</div>
	</nav>
);

module.exports = Header