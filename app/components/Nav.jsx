import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		const props = this.props;
		return (
			<nav className="nav nav-pills fixed-top">
				<div className="container" style={{justifyContent:'space-between'}}>
					<div className="navbar-brand">JplusJ.wedding</div>
						<div className="nav nav-pills" style={{float:'right'}}>
							<Link
								to="/"
								className={"nav-link" + (props.path==="/" ? " active" : "")}
							>
									RSVP!
							</Link>
							<Link
								to="/suggest"
								className={"nav-link" + (props.path==="/suggest" ? " active" : "")}
							>
								Suggest a Song
							</Link>
							<Link
								to="/honeymoon"
								className={"nav-link" + (props.path==="/honeymoon" ? " active" : "")}
							>
								Honeymoon
							</Link>
							<Link
								to="/gifts"
								className={"nav-link" + (props.path==="/gifts" ? " active" : "")}
							>
								Gifts
						</Link>
						</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
