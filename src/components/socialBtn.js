// @flow
import React from 'react'

import socialBtnStyles from './socialBtn.module.scss'

type Props = {
  title: string,
  link: string,
  target: string,
}

const SocialBtn = ({ title, link, target }: Props) => (
  <a
    href={link}
    target={target}
    rel="noopener noreferrer"
    className={`${socialBtnStyles.mySocsialBtn} btn btn-sm btn-outline-light`}
  >
    {title}
  </a>
)

SocialBtn.defaultProps = {
  target: '_self',
}

export default SocialBtn
