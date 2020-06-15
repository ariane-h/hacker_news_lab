import React, { Component } from "react";
import { Link } from "react-router-dom";
import HackerNewsLogo from "../HackerNewsLogo.png";

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
							<img src={HackerNewsLogo} alt="Hacker News Logo" />
							<Link to={"/" + story.id}>
								<div className="row numbercircle">
									<span>{index + 1}</span>
								</div>
								<span className="card-title row">{story.title}</span>
							</Link>
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
