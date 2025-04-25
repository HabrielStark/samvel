import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { toast } from 'react-toastify';

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }

    if (error) {
      toast.error(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast.error('Please fill in all fields');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="auth-container fadeIn">
      <div className="auth-card">
        <h1 className="auth-title">
          <i className="fas fa-sign-in-alt"></i> Log In
        </h1>
        <form onSubmit={onSubmit}>
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
                placeholder="Enter your password"
                className="slideIn"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Log In <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        <p className="auth-redirect">
          Don't have an account?{' '}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 