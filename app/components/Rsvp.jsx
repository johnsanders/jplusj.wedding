import React from "react";

const Rsvp = (props) => (
	<div className="row" style={{marginTop:"40px"}}>
		<div className="col-sm-12">
			<form>
				<div className="form-group text-center">
					<h2>RSVP!</h2>
				</div>
				<div className="form-group text-center">
					<div className="col-sm-3" style={{display:"inline-block"}}>
						<label htmlFor="rsvpName">Name</label>
						<input
							type="text"
							name="rsvpName"
							className="form-control text-center" 
							value={props.rsvpName}
							onChange={props.handleUpdateInput}
						/>
					</div>
					<div className="col-sm-3" style={{display:"inline-block"}}>
						<label htmlFor="rsvpEmail">Email</label>
						<input
							type="text"
							name="rsvpEmail"
							className="form-control text-center" 
							value={props.email}
							onChange={props.handleUpdateInput}
						/>
					</div>
					<div className="col-sm-3" style={{display:"inline-block"}}>
						<label htmlFor="rsvpAnswer">Response</label>
						<select
							className="form-control"
							name="rsvpAnswer"
							value={props.rsvpAnswer}
							onChange={props.handleUpdateInput}
						>
							<option value="yes">I'll be there!</option>
							<option value="no">Can't make it</option>
						</select>
					</div>
					{(props.rsvpAnswer === "no" ? null :
					<div className="col-sm-3" style={{display:"inline-block"}}>
						<label htmlFor="name">Number of Guests</label>
						<input 
							type="text"
							name="rsvpGuests"
							className="form-control text-center" 
							value={props.rsvpGuests}
							onChange={props.handleUpdateInput}
						/>
					</div>
					)}
				</div>
				<div className="form-group text-center">
					<button onClick={props.handleSubmit} className="btn btn-primary" style={{width:"20%"}}>
						Send RSVP
					</button>
				</div>
			</form>
		</div>	
	</div>
);

export default Rsvp;
