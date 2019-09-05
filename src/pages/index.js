// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import { Scrollspy } from 'reactstrap-scrollspy'
import favicon from '../../static/favicon.ico'

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="shortcut icon" href={favicon} />
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,300,300i,500,500i" rel="stylesheet" />
        <link href="https://keisukesasaki.com/assets/fonts/et-line-font/et-line-font.css" rel="stylesheet" />
      </Helmet>
      <Layout>
        <Scrollspy navLinkNames={['header', 'portfolio', 'about', 'skills', 'learning', 'work', 'career']}>
          <Header />
          <Portfolio />
          <About />
          <Skills />
          <Learning />
          <Work />
          <Career />
        </Scrollspy>
      </Layout>
    </>
  )
}

export default IndexPage
