import { CURRENT_YEAR, AUTHOR_NAME, FOOTER_MESSAGE } from '../config'

// @ts-expect-error
import * as footerStyles from './footer.module.scss'

function Footer() {
  return (
    <footer id="footer" className={footerStyles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-sm-12 text-center ${footerStyles.footer__text}`}>
            <small>
              &copy;
              {CURRENT_YEAR} {AUTHOR_NAME}. <span className={footerStyles.footer__saying}>{FOOTER_MESSAGE}</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
