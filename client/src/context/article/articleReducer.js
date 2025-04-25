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

const articleReducer = (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.data || [],
        pagination: action.payload.pagination || null,
        loading: false
      };
    case GET_ARTICLE:
      return {
        ...state,
        current: action.payload.data || null,
        loading: false
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload.data || {}, ...state.articles],
        loading: false
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article =>
          article._id === (action.payload.data?._id || '') ? (action.payload.data || article) : article
        ),
        current: null,
        loading: false
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          article => article._id !== action.payload
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_ARTICLES:
      return {
        ...state,
        filtered: state.articles.filter(article => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return article.title.match(regex) || article.content.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default articleReducer; 