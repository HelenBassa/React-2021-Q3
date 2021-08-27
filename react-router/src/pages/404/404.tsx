import React, { FC } from 'react';
import img from '../../assets/404-cat.jpg';

export const PageNotFound: FC = () => {
  return (
    <div>
      <div className="wrapper-404">
        <div className="text">Oooops!!! Page not found</div>
        <img className="img" src={img} alt="Cat" />
      </div>
    </div>
  );
};
