import React from "react";
import "./App.css";
import StoryIndex from "./containers/StoryIndex";

function App() {
	return (
		<div className="App">
			<h2>Hacker News Top Stories</h2>
			<StoryIndex></StoryIndex>
		</div>
	);
}

export default App;
