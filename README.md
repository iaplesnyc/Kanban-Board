# Krazy Kanban Board

## Description
**Krazy Kanban Board** is a full-stack task management application that enables users to securely log in, create, update, and manage work tasks using a visual kanban board layout.

The project features **secure authentication with JSON Web Tokens (JWT)**, **protected API routes**, and **dynamic front-end behavior** based on the user's login state. It simulates an Agile workflow by allowing tasks to move through **Todo**, **In Progress**, and **Done** swimlanes.

---

## Features
- 🔐 Secure login with **JWT authentication**
- 🧠 Protected API routes for tickets and users
- 📦 Secure storage of JWT tokens in localStorage
- 🏁 Automatic redirection based on authentication state
- 🗂️ Full CRUD functionality for managing tickets
- 📋 Responsive, user-friendly kanban board layout
- 🚀 Deployed on **Render** for full-stack hosting

---

## Technologies Used
- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL, Sequelize
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iaplesnyc/Kanban-Board.git
   cd Kanban-Board/Develop
   ```

2. **Install server dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**:
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file inside the `server/` folder with the following variables:
   ```plaintext
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_NAME=your_postgres_database
   DB_HOST=your_postgres_host
   DB_PORT=5432
   JWT_SECRET=your_super_secret_key
   ```

5. **Start the backend server**:
   ```bash
   cd server
   npm run dev
   ```

6. **Start the frontend React app** (in a separate terminal):
   ```bash
   cd client
   npm run dev
   ```

---

## Usage

1. Visit the deployed application.
2. Log in with the provided test credentials (see below).
3. Access the main Kanban board.
4. Create new tickets, move them between swimlanes, update, or delete them.
5. Log out securely to clear the JWT token from localStorage.

### 🔑 Test Login Credentials

> Use the following credentials to log in and access the Kanban Board:
>
> - **Username:** `admin`
> - **Password:** `password123`

*Credentials are hardcoded for demo purposes only.*

---

## Deployment

🔗 **Live Application**: [https://kanban-board-ifin.onrender.com](https://kanban-board-ifin.onrender.com)

---

## Screenshots

> Add screenshots of the Login page, Kanban board, and Create Ticket page for a professional presentation.
![Kanban Board Screenshot](./assets/Screenshot%202025-04-27%20135917.png)

## Future Improvements
- Add registration functionality.
- Enable assigning tickets to dynamic users.
- Add sorting and filtering features for tickets.
- Enhance UI/UX for better accessibility and responsiveness.