// @flow
import React from 'react'
import type { Node } from 'react'
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap'

import cardStyles from './card.module.scss'

type Props = {
  title: string,
  subTitle: string,
  imgSrc: string,
  Modal: Node,
  children: string,
}

const CardComponent = ({ title, subTitle, imgSrc, Modal, children }: Props) => (
  <Card>
    <div className={`card-block ${cardStyles.card__blockDecoration}`}>
      <CardTitle>
        <h4>{title}</h4>
      </CardTitle>
      <CardSubtitle>
        <h6>{subTitle}</h6>
      </CardSubtitle>
    </div>
    <CardImg src={imgSrc} alt={title} />
    <div className={`card-block ${cardStyles.card__blockDecoration}`}>
      <CardText>{children}</CardText>
      <Modal />
    </div>
  </Card>
)

export default CardComponent
