import React from "react";
import axios from "axios";
import jQuery from "jquery";
import autoBind from "react-autobind";
import Nav from "./Nav";
import Slides from "./Slides";
import Notification from "./Notification";

class Suggest extends React.Component {
	constructor(props){
		super(props);
		this.state = { suggestionName:"", suggestionSong:"" };
		autoBind(this);
	}
	handleUpdateInput(e){
		this.setState( {[e.target.name]:e.target.value} );
	}
	handleSubmitSuggestion(e){
		e.preventDefault();
		axios.post("/saveSuggestion.php", jQuery.param({message:`${this.state.suggestionName} ${this.state.suggestionSong}`}))
			.then( (res) => {
				this.setState( {
					notificationStatus:"success",
					notificationText:"Song suggestion sent.  Thanks!"
				});
		}).catch( err => console.log(err) );
	}
	render(){
		return(
			<div>
				<Nav path={this.props.match.path} />
				<Slides />
				{ window.Promise ? null : <h3 className="text-center" style={{marginTop:"20px", color:"red"}}>Seems you're using an older browser.  This might not work.</h3> }
				<div className="row" style={{marginTop:"40px"}}>
					<div className="col-sm-12">
						<form>
							<div className="form-group text-center">
								<h2>Suggest Tunes</h2>
							</div>
							<div className="form-group text-center">
								<div className="col-sm-4" style={{display:"inline-block"}}>
									<label htmlFor="suggestionName">Your Name</label>
									<input
										type="text"
										name="suggestionName"
										className="form-control text-center" 
										value={this.state.suggestionName}
										placeholder="John Doe"
										onChange={this.handleUpdateInput}
									/>
								</div>
								<div className="col-sm-4" style={{display:"inline-block"}}>
									<label htmlFor="suggestionSong">Song Suggestion</label>
									<input
										type="text"
										name="suggestionSong"
										className="form-control text-center" 
										value={this.state.suggestionSong}
										placeholder="Yakkity Sax by Benny Hill"
										onChange={this.handleUpdateInput}
									/>
								</div>
							</div>
							<div className="form-group text-center">
								<button onClick={this.handleSubmitSuggestion} className="btn btn-primary" style={{width:"20%"}}>
									Send Song Suggestion
								</button>
							</div>
						</form>
					</div>	
				</div>
				<Notification status={this.state.notificationStatus} text={this.state.notificationText} />
			</div>
		);
	}
}
export default Suggest;
