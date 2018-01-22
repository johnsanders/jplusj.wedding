import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Suggest from "./Suggest";
import Donate from "./Donate";
import Honeymoon from "./Honeymoon";

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/suggest" component={Suggest} />
			<Route path="/honeymoon" component={Honeymoon} />
			<Route path="/gifts" component={Donate} />
		</Switch>
	</BrowserRouter>
);

export default App;
