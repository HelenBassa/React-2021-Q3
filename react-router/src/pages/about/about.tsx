import React, { FC } from 'react';
import img from '../../assets/cute-cat.jpg';

export const About: FC = () => {
  return (
    <div>
      <div className="about-wrapper">
        <div className="text">
          There are two means of refuge from the miseries of life: music and
          cats.
        </div>
        <img className="img" src={img} alt="Cat" />
      </div>
    </div>
  );
};
