# ArtBlog - Modern Web Application

ArtBlog is a fully functional, interactive web platform combining modern frontend techniques with a clean, modular backend architecture and persistent data storage. It allows users to create accounts, write and publish articles, and interact with content created by other users.

## Features

- **Interactive User Interface** with animated transitions
- **CRUD Operations** for articles
- **Responsive Design** for all screen sizes
- **Authentication System** with JWT tokens
- **Real-time Search** for articles
- **User Dashboard** to manage content
- **Toast Notifications** for feedback

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- SCSS for styling
- Axios for API requests
- React Toastify for notifications

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT Authentication
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/artblog.git
cd artblog
```

2. Install server dependencies
```
cd server
npm install
```

3. Install client dependencies
```
cd ../client
npm install
```

4. Create a `.env` file in the server directory with the following variables:
```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```

### Running the Application

1. Start the backend server
```
cd server
npm run dev
```

2. Start the frontend client (in a new terminal)
```
cd client
npm start
```

3. The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- POST `/api/v1/auth/register` - Register a new user
- POST `/api/v1/auth/login` - Login user
- GET `/api/v1/auth/logout` - Logout user
- GET `/api/v1/auth/me` - Get current logged in user

### Articles
- GET `/api/v1/articles` - Get all articles (with pagination)
- GET `/api/v1/articles/:id` - Get single article by ID
- POST `/api/v1/articles` - Create new article (requires auth)
- PUT `/api/v1/articles/:id` - Update article (requires auth)
- DELETE `/api/v1/articles/:id` - Delete article (requires auth)

## License

This project is licensed under the MIT License 