import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainForumPage from "./components/MainForumPage";
import TopicDetailPage from "./components/TopicDetailPage";
import LoginPage from "./components/LoginPage";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container mt-4">
				<Routes>
					<Route path="/" element={<MainForumPage />} />
					<Route path="/topic/:id" element={<TopicDetailPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
