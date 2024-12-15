import React, { useState } from "react";
import api from "../api";

function NewTopicForm({ onTopicCreated }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		api
			.post("/api/topics/", { title })
			.then((res) => {
				onTopicCreated(res.data);
				setTitle("");
			})
			.catch((err) => console.error(err));
	};

	return (
		<form onSubmit={handleSubmit} className="mb-3">
			<div className="mb-3">
				<label className="form-label">New Topic Title</label>
				<input
					type="text"
					className="form-control"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
			</div>
			<button type="submit" className="btn btn-success">
				Create Topic
			</button>
		</form>
	);
}

export default NewTopicForm;
