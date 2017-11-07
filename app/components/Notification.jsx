import React from "react";

const Notification = (props) => (
	props.text ? 
		<div className="form-group" id="notification">
			<div className="col-sm-12 text-center">
				<div className={`card text-white bg-${props.status}`} style={{width:"50%", margin:"0 auto"}}>
					<div className="card-body">
						<p className="card-text">{props.text}</p>
					</div>
				</div>
			</div>
		</div>
	: null
);
export default Notification;
