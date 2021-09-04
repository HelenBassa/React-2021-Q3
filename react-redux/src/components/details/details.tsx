import React, { ReactElement } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { ICard } from '../../types';

export const Details = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: RouteComponentProps<{ history: string }, any, ICard>
): ReactElement => {
  if (!props.location.state) return <Redirect to="/" />;
  const propsState = props.location.state.cardData;
  const { title, author, description, publishedAt, urlToImage, url } =
    propsState;

  return (
    <>
      <div className="container">
        <div className="card full">
          <div className="card__img full">
            <img src={urlToImage} alt={title} />
          </div>
          <div className="card__description">
            <a className="description__title full" href={url}>
              {title}
            </a>
            <p className="description__author">Author: {author}</p>
            <p className="description__category">Published at: {publishedAt}</p>
            <p className="description__text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
