import React, { useContext, useEffect, useState } from 'react';
import ArticleContext from '../../context/article/articleContext';
import ArticleItem from './ArticleItem';
import Spinner from '../layout/Spinner';

const Articles = () => {
  const articleContext = useContext(ArticleContext);
  const { getArticles, articles = [], pagination, filtered, loading } = articleContext;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getArticles(page);
    // eslint-disable-next-line
  }, [page]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleNextPage = () => {
    if (pagination && pagination.next) {
      setPage(pagination.next.page);
    }
  };

  const handlePrevPage = () => {
    if (pagination && pagination.prev) {
      setPage(pagination.prev.page);
    }
  };

  const filteredArticles = searchTerm
    ? (articles || []).filter(
        article =>
          article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.content?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles || [];

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="articles-container fadeIn">
      <div className="search-container">
        <div className="form-group">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <p className="text-center">No articles found</p>
      ) : (
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <ArticleItem key={article._id} article={article} />
          ))}
        </div>
      )}

      {!searchTerm && pagination && (
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            className="btn btn-light"
            disabled={!pagination.prev}
          >
            <i className="fas fa-chevron-left"></i> Previous
          </button>
          <span className="current-page">
            Page {page} of {Math.ceil(pagination.total / pagination.limit)}
          </span>
          <button
            onClick={handleNextPage}
            className="btn btn-light"
            disabled={!pagination.next}
          >
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles; 