import React from "react";

const Comments = ({ comments }) => {
	const commentList =
		comments !== null ? (
			comments.map((comment) => {
				const commentText = comment.text ? (
					comment.text.length < 200 ? (
						comment.text
					) : (
						comment.text.slice(0, 200)
					)
				) : (
					<span className="red-text text-darken-3">comment deleted</span>
				);
				return (
					<div key={comment.id}>
						<p>{commentText}</p>
					</div>
				);
			})
		) : (
			<p>Loading comments...</p>
		);

	return <div className="container">{commentList}</div>;
};

export default Comments;
