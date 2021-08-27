import { SetStateAction } from 'react';

export interface IForm {
  setFormValues: SetStateAction<ICardData[]>;
}

export interface ISearchPanel {
  setState: React.Dispatch<React.SetStateAction<ICardData[]>>;
  sortBy: SortType;
  setSortBy: (sortBy: SortType) => void;
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  pageCounter: number;
  setPageCounter: (page: number) => void;
  totalResults: number;
  setTotalResults: React.Dispatch<React.SetStateAction<number>>;
  // setIsDataStatus: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISearchLine {
  isLoading: boolean;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IRadioBtns {
  sortBy: SortType;
  setSortBy: (sortBy: SortType) => void;
}

export interface IRadioBtn {
  sortBy: SortType;
  sorting: SortType;
  setSortBy: (sorting: SortType) => void;
}

export interface IPagination {
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  pageCounter: number;
  totalResults: number;
}

export interface ICardField {
  state: ICardData[];
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

// export interface IArticle {
//   author: string;
//   content: string;
//   description: string;
//   publishedAt: string;
//   source: { id: string; name: string };
//   title: string;
//   url: string;
//   urlToImage: string;
// }

export interface IGet200Articles {
  totalResults: SetStateAction<number>;
  articles: ICardData[];
}

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

export interface IDetailsParams {
  id: string;
}

export enum StatusCode {
  BadRequest = 400,
  TooManyRequests = 429,
  UpgradeRequired = 426,
  ServerErrorInternal = 500,
}
