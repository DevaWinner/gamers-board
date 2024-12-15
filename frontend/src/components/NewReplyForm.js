import React, { useState } from "react";
import api from "../api";

function NewReplyForm({ topicId, onReplyCreated }) {
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		api
			.post("/api/posts/", { topic: topicId, content })
			.then((res) => {
				onReplyCreated(res.data);
				setContent("");
			})
			.catch((err) => console.error(err));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
				<label className="form-label">Your Reply</label>
				<textarea
					className="form-control"
					rows="3"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					required
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Post Reply
			</button>
		</form>
	);
}

export default NewReplyForm;
