// @ts-expect-error
import * as socialBtnStyles from './socialBtn.module.scss'

type Props = {
  title: string
  link: string
  target?: string
}

function SocialBtn({ title, link, target = '_self' }: Props) {
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

export default SocialBtn
