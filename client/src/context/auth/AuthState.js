import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import config from '../../utils/config';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get(`${config.apiUrl}/auth/me`);

      dispatch({
        type: USER_LOADED,
        payload: res.data?.data || {}
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async formData => {
    console.log('Registering user...', formData);
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      console.log('Sending registration request to server...');
      const res = await axios.post(`${config.apiUrl}/auth/register`, formData, config);
      console.log('Registration successful:', res.data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data || { token: null }
      });

      loadUser();
    } catch (err) {
      console.error('Registration error:', err);
      
      let errorMessage = 'Registration failed';
      
      if (err.response) {
        console.error('Server response:', err.response.data);
        errorMessage = err.response.data.error || 'Registration failed';
      } else if (err.request) {
        console.error('No response from server');
        errorMessage = 'No response from server. Please try again.';
      } else {
        console.error('Request setup error:', err.message);
        errorMessage = err.message;
      }
      
      dispatch({
        type: REGISTER_FAIL,
        payload: errorMessage
      });
    }
  };

  // Login User
  const login = async formData => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(`${config.apiUrl}/auth/login`, formData, axiosConfig);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data || { token: null }
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response?.data?.error || 'Login failed. Please check your credentials.'
      });
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axios.get(`${config.apiUrl}/auth/logout`);
      dispatch({ type: LOGOUT });
    } catch (err) {
      dispatch({ type: LOGOUT });
    }
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState; 