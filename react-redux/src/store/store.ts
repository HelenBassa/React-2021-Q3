import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import articlesReducer from './articlesReducer';
import pageReducer from './pageReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  articles: articlesReducer,
  page: pageReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
