import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (

			<nav className="nav nav-pills fixed-top">
				<div className="container" style={{justifyContent:'space-between'}}>
					<div className="navbar-brand">JplusJ.wedding</div>
					<div className="nav nav-pills" style={{float:'right'}}>
						<Link to="/" className="nav-link active">Home</Link>
						<Link to="/" className="nav-link">About Us</Link>
						<Link to="/" className="nav-link">Gallery</Link>
						<Link to="/" className="nav-link">Wedding</Link>
						<Link to="/" className="nav-link">RSVP!</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
