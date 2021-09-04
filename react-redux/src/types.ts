import { SetStateAction } from 'react';

export interface ISearchPanel {
  sortBy: SortType;
  page: number;
  pageSize: number;
  pageCounter: number;
}

export interface ISearchLine {
  isLoading: boolean;
  searchValue: string;
}

export interface IRadioBtns {
  sortBy: SortType;
}

export interface IRadioBtn {
  sortBy: SortType;
  sorting: SortType;
  setSortBy: (sorting: SortType) => void;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCounter: number;
}

export interface ICard {
  cardData: ICardData;
  index: number;
}

export interface ICardData {
  author: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IGet200Articles {
  totalResults: SetStateAction<number>;
  articles: ICardData[];
}

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
export interface IActionReducer {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export enum ActionTypes {
  SEARCH_VALUE = 'SEARCH_VALUE',
  SORT_BY = 'SORT_BY',
  PAGE = 'PAGE',
  PAGE_COUNTER = 'PAGE_COUNTER',
  PAGE_SIZE = 'PAGE_SIZE',
  TOTAL_RESULTS = 'TOTAL_RESULTS',
  ADD_ARTICLE = 'ADD_ARTICLE',
}
