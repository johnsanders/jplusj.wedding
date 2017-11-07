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
			rsvpAnswer:"yes",
			rsvpGuests:"",
			notificationStatus:"",
			notificationText:"",
			rsvpSent:false
		};
		autobind(this);
	}
	handleSubmitRsvp(e){
		e.preventDefault();
		axios.post("/saveRsvp.php", jQuery.param({message:`${this.state.rsvpName} ${this.state.rsvpAnswer} ${this.state.rsvpGuests}`}))
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
				<Nav />
				<Slides />
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
