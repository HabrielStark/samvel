import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import ArticleContext from '../context/article/articleContext';
import Spinner from '../components/layout/Spinner';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);
  
  const { user, loading: authLoading } = authContext;
  const { 
    articles, 
    getArticles, 
    loading: articleLoading, 
    deleteArticle, 
    setCurrent 
  } = articleContext;

  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    authContext.loadUser();
    getArticles();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (articles && user) {
      const filteredArticles = articles.filter(
        article => article?.user === user?._id
      );
      setUserArticles(filteredArticles);
    }
  }, [articles, user]);

  const onDelete = id => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(id);
    }
  };

  const onEdit = article => {
    setCurrent(article);
  };

  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (authLoading || articleLoading) {
    return <Spinner />;
  }

  return (
    <div className="dashboard-container fadeIn">
      <div className="container">
        <div className="dashboard-header">
          <h1>
            <i className="fas fa-user-circle"></i> Dashboard
          </h1>
          {user && (
            <div className="user-info">
              <h2>
                Welcome, {user.name}
              </h2>
              <p className="user-email">
                <i className="fas fa-envelope"></i> {user.email}
              </p>
              <p className="user-role">
                <i className="fas fa-user-tag"></i> {user.role === 'admin' ? 'Administrator' : 'User'}
              </p>
            </div>
          )}
        </div>

        <div className="dashboard-actions">
          <Link to="/create-article" className="btn btn-primary">
            <i className="fas fa-plus"></i> Write New Article
          </Link>
        </div>

        <div className="dashboard-section">
          <h3>
            <i className="fas fa-newspaper"></i> My Articles
          </h3>
          
          {userArticles.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h4>You don't have any articles yet</h4>
              <p>
                Create your first article to see it here.
              </p>
              <Link to="/create-article" className="btn btn-primary">
                Write Article
              </Link>
            </div>
          ) :
            <div className="user-articles">
              <div className="articles-table">
                <div className="table-header">
                  <div className="header-title">Title</div>
                  <div className="header-date">Date</div>
                  <div className="header-actions">Actions</div>
                </div>
                
                {userArticles.map(article => (
                  <div className="table-row" key={article._id}>
                    <div className="row-title">
                      <Link to={`/article/${article._id}`}>{article.title}</Link>
                    </div>
                    <div className="row-date">{formatDate(article.createdAt)}</div>
                    <div className="row-actions">
                      <Link 
                        to="/edit-article" 
                        className="btn btn-dark btn-sm"
                        onClick={() => onEdit(article)}
                      >
                        <i className="fas fa-edit"></i> Edit
                      </Link>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(article._id)}
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 