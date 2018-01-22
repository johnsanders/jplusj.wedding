import React from "react";
import Nav from "./Nav";
import Slides from "./Slides";
import elizabeth from "../img/elizabeth.jpg";

const Honeymoon = props => (
	<div>
		<Nav path={props.match.path} />
		<Slides />
		<div className="row" style={{marginTop:"40px"}}>
			<div className="col-sm-12 text-center">
				<p>
					We're planning a summer honeymoon, sailing the Baltic Sea from Southampton, England to St. Petersburg, Russia on board MS Queen Elizabeth!
				</p>
				<p>			
					<img style={{width:"50%"}}src={elizabeth} />
				</p>
			</div>	
		</div>
	</div>
);

export default Honeymoon;
