import React, { Component } from "react";
import { Link } from "react-router-dom";

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
		const { stories } = this.state;
		const storyIndex = stories.length ? (
			stories.map((story, index) => {
				return (
					<div className="card" key={story.id}>
						<div className="card-content">
							<p className="row">{index + 1}</p>
							<span className="card-title row">
								<Link to={"/" + story.id}>{story.title}</Link>
							</span>
							<p className="row">by: {story.by}</p>
						</div>
					</div>
				);
			})
		) : (
			<div>
				<h4>Loading...</h4>
			</div>
		);

		return <div className="container">{storyIndex}</div>;
	}
}

export default StoryIndex;
