import React, { ReactElement } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { ICard } from '../../types';

export const Details = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: RouteComponentProps<{ history: string }, any, ICard>
): ReactElement => {
  // const { id } = useParams<IDetailsParams>();
  // eslint-disable-next-line no-console
  // console.log(props);

  if (!props.location.state) return <Redirect to="/" />;
  const propsState = props.location.state.cardData;
  const { title, author, description, publishedAt, urlToImage, url } =
    propsState;

  return (
    <>
      {/* <h2>Article details - {id}</h2> */}
      <div className="full">
        <div className="container">
          <div className="card">
            <div className="card__img">
              <img src={urlToImage} alt={title} />
            </div>
            <div className="card__description">
              <a className="description__title" href={url}>
                {title}
              </a>
              <p className="description__author">Author: {author}</p>
              <p className="description__category">
                Published at: {publishedAt}
              </p>
              <p className="description__text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
