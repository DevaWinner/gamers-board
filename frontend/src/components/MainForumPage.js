import React, { useEffect, useState } from "react";
import api from "../api";
import NewTopicForm from "./NewTopicForm";
import { Link } from "react-router-dom";

function MainForumPage() {
	const [topics, setTopics] = useState([]);
	const [user, setUser] = useState(null);

	useEffect(() => {
		api
			.get("/api/topics/")
			.then((res) => setTopics(res.data))
			.catch((err) => console.error(err));
		api
			.get("/api/users/current/")
			.then((res) => setUser(res.data))
			.catch(() => setUser(null));
	}, []);

	const handleTopicCreated = (topic) => {
		setTopics([topic, ...topics]);
	};

	return (
		<div>
			<h1>Forum Topics</h1>
			{user ? (
				<NewTopicForm onTopicCreated={handleTopicCreated} />
			) : (
				<p>
					<Link to="/login">Login</Link> to create a new topic.
				</p>
			)}
			<ul className="list-group mt-4">
				{topics.map((topic) => (
					<li
						key={topic.id}
						className="list-group-item d-flex justify-content-between align-items-center"
					>
						<span>{topic.title}</span>
						<Link to={`/topic/${topic.id}`} className="btn btn-sm btn-primary">
							View
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MainForumPage;
