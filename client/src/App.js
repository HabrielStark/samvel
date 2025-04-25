import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// Context
import AuthState from './context/auth/AuthState';
import ArticleState from './context/article/ArticleState';
import setAuthToken from './utils/setAuthToken';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PrivateRoute from './components/routing/PrivateRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './pages/Dashboard';
import CreateArticle from './pages/CreateArticle';
import EditArticle from './pages/EditArticle';

// Styles
import './styles/main.scss';
import './styles/navbar.scss';
import './styles/footer.scss';
import './styles/home.scss';
import './styles/about.scss';
import './styles/articles.scss';
import './styles/auth.scss';
import './styles/dashboard.scss';
import './styles/pages.scss';
import './styles/spinner.scss';
import './styles/forms.scss';

// Set auth token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // Set axios base URL
  useEffect(() => {
    const setBaseURL = () => {
      // Set base URL for production or development
      if (process.env.NODE_ENV === 'production') {
        // Use production API URL
        // Can be set later when deploying
      } else {
        // Use development API URL
        axios.defaults.baseURL = 'http://localhost:5000';
      }
    };

    setBaseURL();
  }, []);

  return (
    <AuthState>
      <ArticleState>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/create-article" 
                  element={
                    <PrivateRoute>
                      <CreateArticle />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/edit-article" 
                  element={
                    <PrivateRoute>
                      <EditArticle />
                    </PrivateRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
          <ToastContainer position="bottom-right" />
        </Router>
      </ArticleState>
    </AuthState>
  );
};

export default App;
