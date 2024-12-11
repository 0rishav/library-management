# Library Management System 📚

## About the Project  
The Library Management System is a robust application designed to simplify library operations. 
- Allows users to create new book records and maintain a comprehensive catalog of all books.  
- Keeps track of all borrowed and returned books efficiently.
- Provides a user-friendly interface for managing book records and user transactions.

## Time Duration  
**Development Period:**  
```plaintext
1st December 2024 – 10th December 2024
```

# How to Run the Project
This project has two main parts:

**Frontend** - Handles the user interface.
**api** - Manages the server-side logic and APIs.

### 1. Clone the Repository  
Run the following command to clone the repository:  
```bash
https://github.com/0rishav/library-management.git
cd library-management
```

### 2. Set Up the Environment Variables  
 **api** require environment variables.

#### Backend Environment Variables  
Create a `.env` file in the `api/` folder and add the following variables:

```env
PORT=8000
MONGO_URL=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=your_token_expiration_time
```

### 3. Install Dependencies  
To install the necessary dependencies for both the **frontend** and **api**, follow these steps:

#### For api  
Navigate to the `api/` directory and install the dependencies:

```bash
cd api
npm install
```

#### For Frontend
Navigate to the `frontend/` directory and install the dependencies:

```bash
cd frontend
npm install
```

### Start the Frontend Development Server  
Navigate to the `frontend/` folder and run the following command to start the frontend development server:

```bash
npm run dev
```

### Start the Backend Development Server  
Navigate to the `frontend/` folder and run the following command to start the frontend development server:

```bash
Nodemon index.js
```

### Technologies Used  

#### Frontend:  
- **React**  
- **Axios** for HTTP requests  
- **React Router** for navigation  

#### Backend:  
- **Node.js** with **Express**  
- **MongoDB** for data storage  

#### Other Tools:   
- **CORS** for handling cross-origin requests  
- **Dotenv** for managing environment variables
- **Bcrypt.js** for password hashing
- **cookie-parser** for parsing cookies
- **jsonwebtoken** for authentication with JSON Web Tokens  
