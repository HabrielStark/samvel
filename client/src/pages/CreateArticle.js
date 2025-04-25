import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleForm from '../components/articles/ArticleForm';
import AuthContext from '../context/auth/authContext';
import ArticleContext from '../context/article/articleContext';

const CreateArticle = () => {
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);
  
  const { isAuthenticated, loadUser } = authContext;
  const { clearCurrent } = articleContext;
  
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();

    if (!isAuthenticated) {
      navigate('/login');
    }

    clearCurrent();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <div className="container fadeIn">
      <div className="page-header">
        <h1>
          <i className="fas fa-feather-alt"></i> Create Article
        </h1>
        <p>
          Share your creative ideas and thoughts with our community.
          <br />
          Поделитесь своими идеями и мыслями с нашим сообществом.
        </p>
      </div>

      <ArticleForm />
    </div>
  );
};

export default CreateArticle; 