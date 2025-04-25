import React, { useReducer } from 'react';
import axios from 'axios';
import ArticleContext from './articleContext';
import articleReducer from './articleReducer';
import {
  GET_ARTICLES,
  GET_ARTICLE,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE,
  ARTICLE_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_ARTICLES,
  CLEAR_FILTER,
  SET_LOADING
} from '../types';

const ArticleState = props => {
  const initialState = {
    articles: [],
    current: null,
    filtered: null,
    pagination: null,
    error: null,
    loading: true
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  // Get Articles
  const getArticles = async (page = 1, limit = 6) => {
    setLoading();

    try {
      const res = await axios.get(`/api/v1/articles?page=${page}&limit=${limit}`);

      dispatch({
        type: GET_ARTICLES,
        payload: res.data || { data: [], pagination: {} }
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response?.data?.error || 'Failed to fetch articles'
      });
    }
  };

  // Get Article
  const getArticle = async id => {
    setLoading();

    try {
      const res = await axios.get(`/api/v1/articles/${id}`);

      dispatch({
        type: GET_ARTICLE,
        payload: res.data || { data: null }
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response?.data?.error || `Failed to fetch article with ID: ${id}`
      });
    }
  };

  // Add Article
  const addArticle = async article => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/v1/articles', article, config);

      dispatch({
        type: ADD_ARTICLE,
        payload: res.data || { data: article }
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response?.data?.error || 'Failed to add article'
      });
    }
  };

  // Delete Article
  const deleteArticle = async id => {
    try {
      await axios.delete(`/api/v1/articles/${id}`);

      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response?.data?.error || `Failed to delete article with ID: ${id}`
      });
    }
  };

  // Update Article
  const updateArticle = async article => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/v1/articles/${article._id}`,
        article,
        config
      );

      dispatch({
        type: UPDATE_ARTICLE,
        payload: res.data || { data: article }
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response?.data?.error || 'Failed to update article'
      });
    }
  };

  // Set Current Article
  const setCurrent = article => {
    dispatch({ type: SET_CURRENT, payload: article });
  };

  // Clear Current Article
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Articles
  const filterArticles = text => {
    dispatch({ type: FILTER_ARTICLES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        current: state.current,
        filtered: state.filtered,
        pagination: state.pagination,
        error: state.error,
        loading: state.loading,
        getArticles,
        getArticle,
        addArticle,
        deleteArticle,
        updateArticle,
        filterArticles,
        clearFilter,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState; 