import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute; 