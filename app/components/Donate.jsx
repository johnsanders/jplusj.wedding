import React from "react";
import Nav from "./Nav";
import Slides from "./Slides";

const Donate = props => (
	<div>
		<Nav path={props.match.path} />
		<Slides />
		<div className="row" style={{marginTop:"40px"}}>
			<div className="col-sm-12 text-center">
				<p>
					We&rsquo;re serious about not requesting gifts. Just turn up and have a good time.
				</p>
				<p>
					But if you really want to make a contribution toward our honeymoon, we&rsquo;ve set up a PayPal account, if you'd like to use that.
				</p>
				<p>
					You don&lsquo;t need a PayPal account to use it.
				</p>
			</div>	
		</div>
		<div className="row">
			<div className="col-sm-12 text-center">
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="U36KULDHX7F5L" />
					<input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
					<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>	
		</div>
	</div>
);

export default Donate;
