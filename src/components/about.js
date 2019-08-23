// @flow
import React from 'react'
import SocialBtnGroup from './socialBtnGroup'

import aboutStyles from './about.module.scss'

const About = () => (
  <div>
    <section id="about" className={aboutStyles.myAbout}>
      <div className={aboutStyles.mySectionContent}>
        <div className="container">
          <div className="col-md-6">
            <div className={aboutStyles.myAbout__text}>
              <h3>About me</h3>
              <p className="lead">
                I&#39;m seeking opportunities of a full-stack web developer job in Tokyo, San Francisco Bay Area or any
                interesting city in the world. If you&#39;re looking for a developer like Full-Stack Web Developer,
                Front-End React Developer or Back-End NodeJS / TypeScript / Python / Go / Java / Kotlin Developer, feel
                free to contact me!
              </p>
              <p>
                I have worked as a Full-Stack Web Developer specialized in JavaScript and Java since 2011. (See{' '}
                <span className="p-link">
                  <a href="/#skills">
                    <strong>Skills</strong>
                  </a>
                </span>{' '}
                and{' '}
                <span className="p-link">
                  <a href="/#work">
                    <strong>Experience</strong>
                  </a>
                </span>{' '}
                sections) My current goal is to further master the most modern full-stack technologies around
                JavaScript. And my next goal is to found my outstanding company and change people&#39;s lives in the
                world. I&#39;m thinking of starting my own business several years later but I&#39;ll focus on an
                application development so far because intesting technologies like Blockchain or Machine-learning come
                into being recently and I&#39;d like to extend my knowledge around them. And I also launched a website
                for a bitcoin trade as a hobby. (See a{' '}
                <span className="p-link">
                  <a href="/#portfolio">
                    <strong>Portfolio</strong>
                  </a>
                </span>{' '}
                section) Finally, I would provide value to any company from my committed work to achieve any
                project&#39;s aim.
              </p>
              <h5>Feel free to contact me!</h5>
              <SocialBtnGroup section="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
