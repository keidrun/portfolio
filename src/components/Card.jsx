// @flow
import React from 'react';

type Props = {
  title: string,
  subTitle: string,
  imgSrc: string,
  modelId: string,
  children: string,
};

const Card = ({ title, subTitle, imgSrc, modelId, children }: Props) => (
  <div className="card">
    <div className="card-block my-card__block--decoration">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle">{subTitle}</h6>
    </div>
    <img src={imgSrc} alt={title} />
    <div className="card-block my-card__block--decoration">
      <p className="card-text">{children}</p>
      <button
        type="button"
        className="my-btn my-btn--main-color btn"
        data-toggle="modal"
        data-target={`#${modelId}`}
      >
        More
      </button>
    </div>
  </div>
);

export default Card;
