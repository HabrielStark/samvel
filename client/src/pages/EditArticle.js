import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleForm from '../components/articles/ArticleForm';
import AuthContext from '../context/auth/authContext';
import ArticleContext from '../context/article/articleContext';

const EditArticle = () => {
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);
  
  const { isAuthenticated, loadUser } = authContext;
  const { current } = articleContext;
  
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();

    if (!isAuthenticated) {
      navigate('/login');
    }

    if (!current) {
      navigate('/articles');
    }
    // eslint-disable-next-line
  }, [isAuthenticated, current]);

  return (
    <div className="container">
      <div className="page-header">
        <h1>
          <i className="fas fa-edit"></i> Edit Article
        </h1>
        <p>
          Make changes to your article and update it.
        </p>
      </div>

      <ArticleForm />
    </div>
  );
};

export default EditArticle; 