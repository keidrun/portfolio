// @flow
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
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
  const [activeName, setActiveName] = useState('header')

  const changeActiveName = name => setActiveName(name)

  const changeActiveNameLazily = name => setTimeout(() => setActiveName(name), 100)

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
        <Header
          activeName={activeName}
          onEnter={() => changeActiveName('header')}
          topOffset="50%"
          bottomOffset="40%"
          onClickIcon={changeActiveNameLazily}
          onClickNav={changeActiveNameLazily}
        />
        <Portfolio onEnter={() => changeActiveName('portfolio')} topOffset="50%" bottomOffset="40%" />
        <About onEnter={() => changeActiveName('about')} topOffset="50%" bottomOffset="40%" />
        <Skills onEnter={() => changeActiveName('skills')} topOffset="50%" bottomOffset="40%" />
        <Learning onEnter={() => changeActiveName('learning')} topOffset="50%" bottomOffset="40%" />
        <Work onEnter={() => changeActiveName('work')} topOffset="50%" bottomOffset="40%" />
        <Career onEnter={() => changeActiveName('career')} topOffset="50%" bottomOffset="0%" />
      </Layout>
    </>
  )
}

export default IndexPage
