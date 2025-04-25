import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import ArticleContext from '../context/article/articleContext';
import AuthContext from '../context/auth/authContext';

const ArticlesPage = () => {
  const articleContext = useContext(ArticleContext);
  const authContext = useContext(AuthContext);
  
  const { isAuthenticated } = authContext;

  // Clear current article when navigating to articles page
  useEffect(() => {
    articleContext.clearCurrent();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="articles-page">
      <div className="container">
        <div className="page-header">
          <h1>
            <i className="fas fa-newspaper"></i> Articles
          </h1>
          <p>
            Explore interesting articles written by our authors.
          </p>
          
          {isAuthenticated && (
            <Link to="/create-article" className="btn btn-primary">
              <i className="fas fa-plus"></i> Write Article
            </Link>
          )}
        </div>
        
        <Articles />
      </div>
    </div>
  );
};

export default ArticlesPage; 