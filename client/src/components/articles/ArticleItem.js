import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ArticleContext from '../../context/article/articleContext';

const ArticleItem = ({ article }) => {
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);
  
  const { isAuthenticated, user } = authContext;
  const { deleteArticle, setCurrent, clearCurrent } = articleContext;

  const { _id, title, content, author, createdAt, user: articleUser } = article;

  // Format date
  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Truncate content to 150 characters
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  const onDelete = () => {
    deleteArticle(_id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(article);
  };

  return (
    <div className="card article-card fadeIn">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="article-meta">
          <span>
            <i className="fas fa-user"></i> {author}
          </span>
          <span>
            <i className="fas fa-calendar-alt"></i> {formatDate(createdAt)}
          </span>
        </div>
      </div>
      <div className="card-body">
        <p>{truncateText(content, 150)}</p>
        <div className="card-actions">
          <Link to={`/article/${_id}`} className="btn btn-primary">
            Read More <i className="fas fa-arrow-right"></i>
          </Link>
          
          {isAuthenticated && user && (user._id === articleUser || user.role === 'admin') && (
            <div className="btn-group">
              <Link to="/edit-article" className="btn btn-dark" onClick={onEdit}>
                <i className="fas fa-edit"></i> Edit
              </Link>
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

ArticleItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleItem; 