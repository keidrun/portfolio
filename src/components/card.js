// @flow
import React from 'react'

import cardStyles from './card.module.scss'

type Props = {
  title: string,
  subTitle: string,
  imgSrc: string,
  modelId: string,
  children: string,
}

const Card = ({ title, subTitle, imgSrc, modelId, children }: Props) => (
  <div className="card">
    <div className={`card-block ${cardStyles.myCard__blockDecoration}`}>
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle">{subTitle}</h6>
    </div>
    <img src={imgSrc} alt={title} />
    <div className={`card-block ${cardStyles.myCard__blockDecoration}`}>
      <p className="card-text">{children}</p>
      <button
        type="button"
        className={`${cardStyles.myBtn} ${cardStyles.myBtnMainColor} btn`}
        data-toggle="modal"
        data-target={`#${modelId}`}
      >
        More
      </button>
    </div>
  </div>
)

export default Card
