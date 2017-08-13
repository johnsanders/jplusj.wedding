import React from "react";
import Nav from "./Nav";
import Slides from "./Slides";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="container-fluid">
				<Nav />
				<Slides />
			</div>
		);
	}
} export default Home;
