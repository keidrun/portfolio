import { ReactNode } from 'react'
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap'

// @ts-expect-error
import * as cardStyles from './card.module.scss'

type Props = {
  title: string
  subTitle: string
  imgSrc: string
  renderModal: () => ReactNode
  children: string
}

function CardComponent({ title, subTitle, imgSrc, renderModal, children }: Props) {
  return (
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
        {renderModal()}
      </div>
    </Card>
  )
}

export default CardComponent
