import { HelmetProvider } from 'react-helmet-async'
// @ts-expect-error
import { Scrollspy } from 'reactstrap-scrollspy'

import SEO from '../components/hoc/seo'
import Layout from '../components/hoc/layout'
import Header from '../components/header'
import Portfolio from '../components/portfolio'
import About from '../components/about'
import Skills from '../components/skills'
import Learning from '../components/learning'
import Work from '../components/work'
import Career from '../components/career'

function IndexPage() {
  return (
    <HelmetProvider>
      <SEO>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,300,300i,500,500i" rel="stylesheet" />
        <link href="/assets/fonts/et-line-font/et-line-font.css" rel="stylesheet" />
      </SEO>
      <Layout>
        <Scrollspy names={['header', 'portfolio', 'about', 'skills', 'learning', 'work', 'career']}>
          <Header />
          <Portfolio />
          <About />
          <Skills />
          <Learning />
          <Work />
          <Career />
        </Scrollspy>
      </Layout>
    </HelmetProvider>
  )
}

export default IndexPage
