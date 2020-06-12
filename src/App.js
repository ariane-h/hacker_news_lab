import React from "react";
import "./App.css";
import StoryIndex from "./containers/StoryIndex";
import { BrowserRouter, Route } from "react-router-dom";
import Story from "./containers/Story";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h1>Hacker News</h1>
				<Route exact path="/" component={StoryIndex} />
				<Route path="/:storyId" component={Story} />
			</div>
		</BrowserRouter>
	);
}

export default App;
