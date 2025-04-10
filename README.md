#   MERN Authentication Boilerplate with Passport-JWT

A robust and streamlined foundation for user authentication in full-stack applications, leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js) and `passport-jwt` for secure, stateless, token-based authentication. This boilerplate provides a solid starting point for building applications requiring secure user management.

**Live Demo:** \**https://mern-jwt-auth-beta.vercel.app/**

---

##   Key Features

* **Full-Stack MERN Architecture:** A complete and integrated MERN stack setup for efficient development.
* **Secure JWT Authentication:** Implements the `passport-jwt` strategy to protect API endpoints and manage user sessions securely without relying on server-side sessions.
* **Password Hashing with bcrypt:** Employs `bcrypt.js` to securely hash and salt user passwords, ensuring robust credential storage.
* **Protected Routes (Backend):** Demonstrates how to secure backend API routes, allowing access only to authenticated users.
* **Conditional Rendering (Frontend):** Provides examples of how to conditionally render UI elements in the frontend based on user authentication status.
* **Environment Variable Configuration:** Designed for easy setup and configuration using `.env` files, keeping sensitive information secure.
* **Modular Structure:** Organized codebase with a clear separation of concerns between frontend and backend.

##   Technology Stack

* **Frontend:** React
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose for Object Data Modeling)
* **Authentication:** Passport.js (`passport-jwt` strategy)
* **Password Hashing:** bcrypt.js

##   Getting Started

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/shashi997/MERN-JWT-Auth.git
    cd MERN-JWT-Auth
    ```

2.  **Backend Configuration:**

    * Navigate to the server directory:

        ```bash
        cd server
        ```

    * Create a `.env` file and populate it with the following environment variables:

        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_secret_key_for_jwt
        PORT=your_preferred_server_port (e.g., 5000)
        # Add any other necessary environment variables
        ```

        * Replace `your_mongodb_connection_string` with your MongoDB connection URI.
        * Replace `your_secret_key_for_jwt` with a strong, randomly generated secret key.

    * Install backend dependencies:

        ```bash
        npm install
        ```

3.  **Frontend Configuration:**

    * Navigate to the client directory:

        ```bash
        cd client
        ```

    * Install frontend dependencies:

        ```bash
        npm install
        ```

4.  **Running the Application:**

    * **Start the Backend:**

        ```bash
        cd server
        npm start # or npm run dev for development (if you have a dev script)
        ```

    * **Start the Frontend:**

        ```bash
        cd client
        npm start # or npm run start
        ```

    * The application should now be running. The frontend will typically be accessible at `http://localhost:3000` (or your client's port), and the backend API at `http://localhost:5000` (or your server's port).

##   Contributing

Feel free to fork, contribute, and adapt this foundation for your next project! Happy coding!