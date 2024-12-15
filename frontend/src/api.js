import axios from "axios";

function getCookie(name) {
	let cookieValue = null;
	if (document.cookie && document.cookie !== "") {
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

const csrftoken = getCookie("csrftoken");

const api = axios.create({
	baseURL: "http://127.0.0.1:8000",
	withCredentials: true,
});

// Set the CSRF token header for all requests
api.defaults.headers.common["X-CSRFToken"] = csrftoken;

export default api;
