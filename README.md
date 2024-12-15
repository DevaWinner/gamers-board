# Gamers Board

## Overview

Gamers Board is a dynamic web application designed to foster a vibrant online community for gamers. As a software engineer, I developed this project to deepen my understanding of full-stack development, integrating modern technologies to create a seamless user experience. By building Gamers Board, I aimed to enhance my skills in frontend and backend development, authentication mechanisms, and responsive design.

To start a test server on your computer, navigate to the backend directory and run the Django development server:

```bash
cd backend
python manage.py runserver
```

Then, in a separate terminal window, navigate to the frontend directory and start the React development server:

```bash
cd frontend
npm start
```

Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the first page of the app.

The purpose of writing Gamers Board was to create a platform where gamers can create topics, engage in discussions, and share their gaming experiences. This project serves as a practical application of web development principles, allowing me to implement authentication, database interactions, and responsive UI design.

## Software Demo Video

[Software Demo Video](http://youtube.link.goes.here)

## Web Pages

### Home Page (`/`)

The Home Page displays a list of all forum topics. Users can browse existing topics or create a new one if they are logged in. Each topic links to its detailed view where discussions take place.

**Dynamic Content:**

- List of forum topics fetched from the backend.
- "Create New Topic" form appears for authenticated users.

### Topic Detail Page (`/topic/:id`)

The Topic Detail Page shows the selected topic's details along with all associated posts. Authenticated users can add new replies to the topic.

**Dynamic Content:**

- Topic title and metadata.
- List of posts related to the topic.
- "Add Reply" form for authenticated users.

### Login Page (`/login`)

The Login Page provides a button for users to sign in using their Google account. Upon successful authentication, users are redirected back to the Home Page.

**Dynamic Content:**

- "Login with Google" button initiates the OAuth flow.

### Navbar

The Navbar is present on all pages, displaying navigation links and user authentication status. It allows users to log in or out and navigate between different sections of the app.

**Dynamic Content:**

- User greeting and logout button for authenticated users.
- Login button for unauthenticated users.

## Development Environment

### Tools Used

- **Visual Studio Code:** Primary code editor for writing and managing code.
- **Postman:** Used for testing API endpoints during development.
- **Git:** Version control system to manage project codebase.
- **Chrome Developer Tools:** Debugging frontend issues and inspecting network requests.

### Programming Languages and Libraries

- **Python:** Backend development using Django framework.
- **Django REST Framework:** Building RESTful APIs for the backend.
- **React.js:** Frontend development for creating interactive user interfaces.
- **Axios:** Handling HTTP requests from the frontend to the backend.
- **Bootstrap:** Styling the frontend for a responsive and modern look.
- **django-allauth & dj-rest-auth:** Managing user authentication and OAuth with Google.
- **SQLite:** Database used for storing application data during development.

## Useful Websites

- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Router](https://reactrouter.com/)
- [Axios GitHub Repository](https://github.com/axios/axios)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [django-allauth Documentation](https://django-allauth.readthedocs.io/en/latest/)
- [CORS Headers for Django](https://github.com/adamchainz/django-cors-headers)

## Future Work

- **Enhanced User Profiles:** Allow users to customize their profiles with avatars and bio information.
- **Real-Time Notifications:** Implement real-time updates and notifications for new posts and replies using WebSockets.
- **Post Editing and Deletion:** Enable users to edit or delete their own posts and topics.
- **Pagination:** Add pagination to topic and post lists to improve performance with a large number of entries.
- **Search Functionality:** Implement a search feature to allow users to find topics and posts based on keywords.
- **Mobile Responsiveness:** Further optimize the frontend for better performance and usability on mobile devices.
- **Improved Security:** Enhance security measures, such as rate limiting and input validation, to protect against common web vulnerabilities.
- **Deployment:** Prepare the application for deployment on a cloud platform, configuring production settings and optimizing performance.
