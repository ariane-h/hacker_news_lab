import React, { Component } from "react";
import Comments from "../components/Comments";

class Story extends Component {
	state = {
		story: null,
		comments: null,
	};

	componentDidMount() {
		let id = this.props.match.params.storyId;
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
			.then((res) => res.json())
			.then((story) => {
				this.setState({ story: story });
			});
	}
	render() {
		const story = this.state.story ? (
			<div>
				<h2>{this.state.story.title}</h2>
				<p>by: {this.state.story.by}</p>
				<Comments />
			</div>
		) : (
			<div>
				<h3>story loading...</h3>
			</div>
		);

		return <div>{story}</div>;
	}
}

export default Story;
