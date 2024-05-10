# User Authentication System with JWT in Node.js Express

This is a simple user authentication system implemented in a Node.js Express application using JSON Web Tokens (JWT). It allows users to register, login, and access protected routes using JWT for authentication.

## Features

- User registration with unique username and secure password storage
- User login with verification of credentials and issuance of JWT
- Access to protected routes requiring a valid JWT
- Secure logout mechanism that revokes issued tokens
- Optional features:
  - Token expiration for enhanced security
  - Refresh token mechanism to obtain a new JWT without logging in again

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)
- SQLite (for database)
- Axios (for HTTP requests in the React front end)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
```
   cd <project-directory>
```
3.Install dependencies:
```
npm install
```
4.Set up environment variables:Create a .env file in the root directory and add the following variables:
```
PORT=3000
JWT_SECRET=<your-secret-key>
```
5.Run the application:
```
npm start
```
6.Access the application in your browser:Open ```http://localhost:3000``` to view it.

Usage
Register a new user by providing a unique username and a secure password.
Login with the registered username and password to obtain a JWT.
Access protected routes by providing the JWT in the Authorization header.
Logout to invalidate the token.

Folder Structure:

.
├── controllers        # Controllers for handling application logic
├── models             # Models representing data structures and interacting with the database
├── routes             # Routes mapping HTTP requests to controller actions
├── app.js             # Main application file
├── .env               # Environment variables
└── README.md          # Project documentation


Contributions are welcome! Feel free to open issues or submit pull requests.
