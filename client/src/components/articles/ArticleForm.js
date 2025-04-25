import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleContext from '../../context/article/articleContext';
import { toast } from 'react-toastify';

const ArticleForm = () => {
  const articleContext = useContext(ArticleContext);
  const { addArticle, updateArticle, current, clearCurrent } = articleContext;

  const navigate = useNavigate();

  const [article, setArticle] = useState({
    title: '',
    content: '',
    author: '',
    image: null
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (current !== null) {
      setArticle(current);
      if (current.imageUrl) {
        setPreview(current.imageUrl);
      }
    } else {
      setArticle({
        title: '',
        content: '',
        author: '',
        image: null
      });
      setPreview(null);
    }
  }, [articleContext, current]);

  const { title, content, author, image } = article;

  const onChange = e =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setArticle({ ...article, image: selectedImage });
      setPreview(URL.createObjectURL(selectedImage));
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    
    if (title === '' || content === '' || author === '') {
      toast.error('Please fill in all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    if (image) {
      formData.append('image', image);
    }

    if (current === null) {
      addArticle(formData);
      toast.success('Article Added');
    } else {
      updateArticle(formData, current._id);
      toast.success('Article Updated');
    }

    clearAll();
    navigate('/articles');
  };

  const clearAll = () => {
    clearCurrent();
    setPreview(null);
  };

  return (
    <div className="form-container fadeIn">
      <h1>
        {current ? 'Edit Article' : 'Create New Article'}
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter article title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            placeholder="Enter author name"
            name="author"
            value={author}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            placeholder="Write your article content here..."
            name="content"
            value={content}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Featured Image</label>
          <div className="file-input-container">
            <label className="file-input-label">
              <i className="fas fa-cloud-upload-alt"></i> 
              {image || preview ? 'Change Image' : 'Select Image'}
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="btn btn-primary"
          >
            <i className="fas fa-save"></i> {current ? 'Update Article' : 'Save Article'}
          </button>

          {current && (
            <button type="button" className="btn btn-secondary" onClick={clearAll}>
              <i className="fas fa-times"></i> Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ArticleForm; 