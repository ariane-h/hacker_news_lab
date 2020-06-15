import React from "react";
import "./App.css";
import StoryIndex from "./containers/StoryIndex";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import Story from "./containers/Story";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Link to="/">
					<div className="row">
						<h3>Hacker News Index</h3>
					</div>
				</Link>
				<Switch>
					<Route exact path="/" component={StoryIndex} />
					<Route path="/:storyId" component={Story} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
