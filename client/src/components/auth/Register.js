import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { toast } from 'react-toastify';

const Register = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }

    if (error) {
      // Display the error message
      if (typeof error === 'string') {
        toast.error(error);
      } else if (Array.isArray(error)) {
        error.forEach(err => toast.error(err));
      } else {
        toast.error('Registration failed. Please try again.');
      }
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !password) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (password !== password2) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    
    // Register user
    register({
      name,
      email,
      password
    });
  };

  return (
    <div className="auth-container fadeIn">
      <div className="auth-card">
        <h1 className="auth-title">
          <i className="fas fa-user-plus"></i> Register
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-group">
              <span className="input-icon">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                required
                placeholder="Enter your name"
                className="slideIn"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <span className="input-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                placeholder="Enter your email"
                className="slideIn"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="input-icon">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                minLength="6"
                placeholder="Enter your password"
                className="slideIn"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <div className="input-group">
              <span className="input-icon">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={onChange}
                required
                minLength="6"
                placeholder="Confirm your password"
                className="slideIn"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        <p className="auth-redirect">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register; 