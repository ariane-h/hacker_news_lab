import React, { Component } from "react";

class StoryIndex extends Component {
	state = {
		stories: [],
	};

	componentDidMount() {
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
			.then((res) => res.json())
			.then((data) => {
				const storyIds = data.slice(0, 15);
				const promises = storyIds.map((id) => {
					return fetch(
						`https://hacker-news.firebaseio.com/v0/item/${id}.json`
					).then((res) => res.json());
				});

				Promise.all(promises).then((results) => {
					this.setState({ stories: results });
				});
			});
	}

	render() {
		return (
			<div>
				<h3>this is the story index</h3>
			</div>
		);
	}
}

export default StoryIndex;
