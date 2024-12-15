import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Navbar() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		api
			.get("/api/users/current/")
			.then((res) => setUser(res.data))
			.catch(() => setUser(null));
	}, []);

	const handleLogout = () => {
		api
			.post("/auth/logout/", {})
			.then(() => {
				window.location.href = "/";
			})
			.catch((err) => console.error(err));
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Gamers Board
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navContent"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navContent">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Forum
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto">
						{user ? (
							<>
								<li className="nav-item me-2">
									<span className="navbar-text">Hello, {user.username}</span>
								</li>
								<li className="nav-item">
									<button
										onClick={handleLogout}
										className="btn btn-outline-danger btn-sm"
									>
										Logout
									</button>
								</li>
							</>
						) : (
							<li className="nav-item">
								<Link className="btn btn-outline-primary btn-sm" to="/login">
									Login with Google
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
