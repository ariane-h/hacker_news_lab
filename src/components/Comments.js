import React from "react";

const Comments = ({ comments }) => {
	const commentList = comments.map((comment) => {
		return (
			<div className="container" key={comment.id}>
				<p>{comment.text}</p>
			</div>
		);
	});

	return <div className="container">{commentList}</div>;
};

export default Comments;
