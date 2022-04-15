// @flow
import React from 'react'

import * as portfolioStyles from './portfolio.module.scss'

function Portfolio() {
  return (
    <section id="portfolio" className={portfolioStyles.portfolio}>
      <div className="container">
        <h3>Portfolio</h3>
        <p className="lead">
          I&#39;m driving my own projects. I show you some my featured projects that you can enjoy.
          <br />
        </p>

        <hr />

        <div className="row">
          <ul
            className={`${portfolioStyles.projectsGrid} ${portfolioStyles.projectsGridGut} ${portfolioStyles.projectsHover}`}
          >
            <li className={portfolioStyles.projectItem3of3}>
              <a href="https://www.coinietrade.com/" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem3of3__name} ${portfolioStyles.orange}`}>
                  CoinieTrade website
                </h3>
                <div className={portfolioStyles.projectItem3of3__caption}>
                  <h3 className={portfolioStyles.projectItem3of3__title}>Go to CoinieTrade website!</h3>
                  <div className={portfolioStyles.projectItem3of3__description}>
                    Website for monitoring and trading bitcoin
                  </div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem1of3}>
              <a href="https://github.com/keidrun/coinietrade-proxy" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem1of3__name} ${portfolioStyles.red}`}>
                  Source Code of Proxy
                </h3>
                <div className={portfolioStyles.projectItem1of3__caption}>
                  <h3 className={portfolioStyles.projectItem1of3__title}>Go to Github of Proxy in CoinieTrade!</h3>
                  <div className={portfolioStyles.projectItem1of3__description}>A Part of CoinieTrade</div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem1of3}>
              <a href="https://github.com/keidrun/coinietrade-front" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem1of3__name} ${portfolioStyles.yellow}`}>
                  Source Code of Front-end
                </h3>
                <div className={portfolioStyles.projectItem1of3__caption}>
                  <h3 className={portfolioStyles.projectItem1of3__title}>Go to Github of Front-end in CoinieTrade!</h3>
                  <div className={portfolioStyles.projectItem1of3__description}>A Part of CoinieTrade</div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem1of3}>
              <a href="https://github.com/keidrun/coinietrade-back" target="_blank" rel="noopener noreferrer">
                <h3 className={portfolioStyles.projectItem1of3__name}>Source Code of Back-end</h3>
                <div className={portfolioStyles.projectItem1of3__caption}>
                  <h3 className={portfolioStyles.projectItem1of3__title}>Go to Github of Back-end in CoinieTrade!</h3>
                  <div className={portfolioStyles.projectItem1of3__description}>A Part of CoinieTrade</div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem3of3}>
              <a href="https://docs.coinietrade.com/" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem3of3__name} ${portfolioStyles.green}`}>
                  Documents of CoinieTrade
                </h3>
                <div className={portfolioStyles.projectItem3of3__caption}>
                  <h3 className={portfolioStyles.projectItem3of3__title}>Go to documents of CoinieTrade!</h3>
                  <div className={portfolioStyles.projectItem3of3__description}>
                    Hosting pages for documents of CoinieTrade website
                  </div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem1of3}>
              <a href="https://github.com/keidrun/dept" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem1of3__name} ${portfolioStyles.blue}`}>
                  Original CLI Tool
                </h3>
                <div className={portfolioStyles.projectItem1of3__caption}>
                  <h3 className={portfolioStyles.projectItem1of3__title}>
                    Go to Github of CLI to begin developing quickly!
                  </h3>
                  <div className={portfolioStyles.projectItem1of3__description}>A NPM project</div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem1of3}>
              <a href="https://github.com/keidrun/css-url-loader" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem1of3__name} ${portfolioStyles.orange}`}>
                  Original Webpack Loader
                </h3>
                <div className={portfolioStyles.projectItem1of3__caption}>
                  <h3 className={portfolioStyles.projectItem1of3__title}>
                    Go to Github of a webpack loader to transform URLs in css!
                  </h3>
                  <div className={portfolioStyles.projectItem1of3__description}>A NPM Project</div>
                </div>
              </a>
            </li>

            <li className={portfolioStyles.projectItem1of3}>
              <a href="https://github.com/keidrun/reactstrap-scrollspy" target="_blank" rel="noopener noreferrer">
                <h3 className={`${portfolioStyles.projectItem1of3__name} ${portfolioStyles.pink}`}>
                  Original React Library
                </h3>
                <div className={portfolioStyles.projectItem1of3__caption}>
                  <h3 className={portfolioStyles.projectItem1of3__title}>
                    Go to Github of a React library to create an automatically update navigation!
                  </h3>
                  <div className={portfolioStyles.projectItem1of3__description}>A NPM Project</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
