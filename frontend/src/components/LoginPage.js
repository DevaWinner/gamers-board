function LoginPage() {
	const handleLogin = () => {
		window.location.href = "http://127.0.0.1:8000/accounts/google/login/";
	};

	return (
		<div>
			<h2>Login</h2>
			<p>Click the button below to sign in using your Google account.</p>
			<button className="btn btn-primary" onClick={handleLogin}>
				Login with Google
			</button>
		</div>
	);
}

export default LoginPage;
