const CURRENT_YEAR = new Date().getFullYear();
const AUTHOR_NAME = 'Keisuke Sasaki';
const FOOTER_MESSAGE = 'Stay hungry stay foolish!';
const IMG_SRC_PREFIX =
  process.env.NODE_ENV === 'development' ? 'https://keisukesasaki.com/' : '';

export { CURRENT_YEAR, AUTHOR_NAME, FOOTER_MESSAGE, IMG_SRC_PREFIX };
