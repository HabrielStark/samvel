import React, { useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ArticleContext from '../context/article/articleContext';
import AuthContext from '../context/auth/authContext';
import Spinner from '../components/layout/Spinner';

const ArticleDetail = () => {
  const articleContext = useContext(ArticleContext);
  const authContext = useContext(AuthContext);
  
  const { getArticle, current, loading, deleteArticle, setCurrent } = articleContext;
  const { isAuthenticated, user } = authContext;
  
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    getArticle(id);
    // eslint-disable-next-line
  }, [id]);
  
  // Format date
  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const onDelete = () => {
    deleteArticle(current._id);
    navigate('/articles');
  };
  
  const onEdit = () => {
    setCurrent(current);
    navigate('/edit-article');
  };
  
  if (loading || !current) return <Spinner />;
  
  const { title, content, author, createdAt, user: articleUser } = current;
  
  return (
    <div className="container">
      <div className="article-detail fadeIn">
        <div className="article-header">
          <h1>{title}</h1>
          <div className="article-meta">
            <span>
              <i className="fas fa-user"></i> {author}
            </span>
            <span>
              <i className="fas fa-calendar-alt"></i> {formatDate(createdAt)}
            </span>
          </div>
        </div>
        
        <div className="article-content">
          {content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="article-actions">
          <Link to="/articles" className="btn btn-light">
            <i className="fas fa-arrow-left"></i> Back to Articles
          </Link>
          
          {isAuthenticated && user && (user._id === articleUser || user.role === 'admin') && (
            <div className="btn-group">
              <button className="btn btn-dark" onClick={onEdit}>
                <i className="fas fa-edit"></i> Edit
              </button>
              <button className="btn btn-danger" onClick={onDelete}>
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail; 