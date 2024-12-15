import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";
import NewReplyForm from "./NewReplyForm";

function TopicDetailPage() {
	const { id } = useParams();
	const [topic, setTopic] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		api
			.get(`/api/topics/${id}/`)
			.then((res) => setTopic(res.data))
			.catch((err) => console.error(err));

		api
			.get("/api/users/current/")
			.then((res) => setUser(res.data))
			.catch(() => setUser(null));
	}, [id]);

	const handleReplyCreated = (post) => {
		setTopic({ ...topic, posts: [...topic.posts, post] });
	};

	if (!topic) return <div>Loading...</div>;

	return (
		<div>
			<h2>{topic.title}</h2>
			<hr />
			<div className="mb-3">
				<h4>Posts</h4>
				{topic.posts.length === 0 && <p>No replies yet.</p>}
				{topic.posts.map((post) => (
					<div className="card mb-2" key={post.id}>
						<div className="card-body">
							<p>{post.content}</p>
							<small>
								By {post.created_by.username} on{" "}
								{new Date(post.created_at).toLocaleString()}
							</small>
						</div>
					</div>
				))}
			</div>
			{user ? (
				<NewReplyForm topicId={topic.id} onReplyCreated={handleReplyCreated} />
			) : (
				<p>
					<Link to="/login">Login</Link> to post a reply.
				</p>
			)}
		</div>
	);
}

export default TopicDetailPage;
