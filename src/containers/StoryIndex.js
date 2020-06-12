import React, { Component } from "react";

class StoryIndex extends Component {
	state = {
		topstories: [],
	};

	componentDidMount() {
		const topStoriesIdsUrl =
			"https://hacker-news.firebaseio.com/v0/topstories.json";

		let storyIds = [];

		const promise = fetch(topStoriesIdsUrl)
			.then((res) => res.json())
			.then((ids) => ids.slice(0, 15))
			.then((ids) => {
				storyIds.push(ids);
			});

		console.log(storyIds);

		Promise.all(promise).then((results) => {
			console.log(promise);
			// results.forEach((storyid) => {
			// 	console.log(storyid);
			// 	fetch(`https://hacker-news.firebaseio.com/v0/item/${storyid}.json`)
			// 		.then((res) => res.json())
			// 		.then((topstories) => this.setState({ topstories: topstories }));
			// });
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
