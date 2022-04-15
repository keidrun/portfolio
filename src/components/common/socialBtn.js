// @flow
import React from 'react'

import * as socialBtnStyles from './socialBtn.module.scss'

type Props = {
  title: string,
  link: string,
  target: string,
}

function SocialBtn({ title, link, target }: Props) {
  return (
    <a
      href={link}
      target={target}
      rel="noopener noreferrer"
      className={`${socialBtnStyles.socialBtn} btn btn-sm btn-outline-light`}
    >
      {title}
    </a>
  )
}

SocialBtn.defaultProps = {
  target: '_self',
}

export default SocialBtn
