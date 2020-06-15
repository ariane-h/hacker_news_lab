import React, { Component } from "react";
import Comments from "../components/Comments";

class Story extends Component {
	state = {
		story: null,
		comments: [],
	};

	componentDidMount() {
		let id = this.props.match.params.storyId;
		fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
			.then((res) => res.json())
			.then((story) => {
				this.setState({ story: story });
				if (story.hasOwnProperty("kids")) {
					const comments = story.kids;

					comments.forEach((commentId) => {
						fetch(
							`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
						)
							.then((res) => res.json())

							.then((comment) => {
								const comments = this.state.comments;
								comments.push(comment);
								this.setState({ comments: comments });
							});
					});
				}
			});
	}
	render() {
		const comments = this.state.comments;
		const story = this.state.story ? (
			<div>
				<a href={this.state.story.url}>
					<h4>{this.state.story.title}</h4>
				</a>
				<h6>by: {this.state.story.by}</h6>
			</div>
		) : (
			<div>
				<h5>story loading...</h5>
			</div>
		);

		return (
			<div>
				<div>{story}</div>
				<Comments comments={comments} />
			</div>
		);
	}
}

export default Story;
