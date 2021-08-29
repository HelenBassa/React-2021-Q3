import { ActionTypes, IActionReducer, SortType } from '../types';

const initialState = {
  searchValue: '',
  sortBy: SortType.publishedAt,
  articles: [],
};

const articlesReducer = (
  state = initialState,
  action: IActionReducer
): typeof initialState => {
  switch (action.type) {
    case ActionTypes.SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case ActionTypes.SORT_BY:
      return { ...state, sortBy: action.payload };
    case ActionTypes.ADD_ARTICLE:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export default articlesReducer;
