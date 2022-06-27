import { ReactNode } from 'react'
import { Card, CardText, CardTitle, CardSubtitle } from 'reactstrap'

// @ts-expect-error
import * as cardStyles from './card.module.scss'

import DynamicImage from '../utils/dynamicImage'

type Props = {
  title: string
  subTitle: string
  src: string
  renderModal: () => ReactNode
  children: string
}

function CardComponent({ title, subTitle, src, renderModal, children }: Props) {
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
      <DynamicImage src={src} alt={title} />
      <div className={`card-block ${cardStyles.card__blockDecoration}`}>
        <CardText>{children}</CardText>
        {renderModal()}
      </div>
    </Card>
  )
}

export default CardComponent
