import React from "react";
import Nav from "./Nav";
import Slides from "./Slides";
import Rsvp from "./Rsvp";
import Notification from "./Notification";
import autobind from "react-autobind";
import axios from "axios";
import jQuery from "jquery";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rsvpName:"",
			rsvpEmail:"",		
			rsvpAnswer:"yes",
			rsvpGuests:"",
			notificationStatus:"",
			notificationText:"",
			rsvpSent:false
		};
		autobind(this);
	}
	handleUpdateInput(e){
		this.setState( {[e.target.name]:e.target.value} );
	}
	handleSubmitRsvp(e){
		e.preventDefault();
		let message = this.state.rsvpName + " " + this.state.rsvpEmail + " ";
		message += this.state.rsvpAnswer + " " + this.state.rsvpGuests;
		axios.post("/saveRsvp.php", jQuery.param({message}))
			.then( (res) => {
				this.setState( {
					notificationStatus:"success",
					notificationText:"RSVP sent.  Thanks!",
					rsvpSent:true
				});
		}).catch( err => console.log(err) );
	}
	render(){
		return (
			<div className="container-fluid">
				<Nav path={this.props.match.path} />
				<Slides />
				<div className="row">
					<div className="col-sm-6 text-center">
						jwsanders@gmail.com
					</div>
					<div className="col-sm-6 text-center">
						mr.jonathan.pizarro@gmail.com
					</div>
				</div>
				{ window.Promise ? null : <h3 className="text-center" style={{marginTop:"20px", color:"red"}}>Seems you're using an older browser.  This might not work.</h3> }
				{ (this.state.rsvpSent ? null :
					<Rsvp 
						rsvpName={this.state.rsvpName}
						rsvpAnswer={this.state.rsvpAnswer}
						rsvpGuests={this.state.rsvpGuests}
						handleSubmit={this.handleSubmitRsvp}
						handleUpdateInput={this.handleUpdateInput}
					/>)
				}
				<Notification status={this.state.notificationStatus} text={this.state.notificationText} />
			</div>
		);
	}
} export default Home;
