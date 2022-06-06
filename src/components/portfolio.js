// @flow
import React from 'react'

import * as portfolioStyles from './portfolio.module.scss'

function ProjectItem({ sizeStyle, colorStyle, url, title, captionTitle, captionDescription }) {
  return (
    <li className={`${portfolioStyles.projectItem} ${sizeStyle}`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h3 className={`${portfolioStyles.projectItem__name} ${colorStyle}`}>{title}</h3>
        <div className={portfolioStyles.projectItem__caption}>
          <h3 className={portfolioStyles.projectItem__title}>{captionTitle}</h3>
          <div className={portfolioStyles.projectItem__description}>{captionDescription}</div>
        </div>
      </a>
    </li>
  )
}

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
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemTwo}
              colorStyle={portfolioStyles.blue}
              url="https://github.com/keidrun/csv-streamy/tree/main/packages/csv-streamy-lib"
              title="Node.js CSV Stream Library"
              captionTitle="Go to Github of a Stream library to handle CSV files fast and easily!"
              captionDescription="A NPM project"
            />
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemTwo}
              colorStyle={portfolioStyles.orange}
              url="https://github.com/keidrun/csv-streamy/tree/main/packages/csv-streamy-cli"
              title="Handy CLI Tool for CSV"
              captionTitle="Go to Github of a CLI Tool to handle CSV files for daily tasks!"
              captionDescription="A NPM project"
            />

            <ProjectItem
              sizeStyle={portfolioStyles.projectItemFour}
              colorStyle={portfolioStyles.orange}
              url="https://www.coinietrade.com/"
              title="CoinieTrade Website"
              captionTitle="Go to CoinieTrade website!"
              captionDescription="Website for monitoring and trading bitcoin"
            />
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemFour}
              colorStyle={portfolioStyles.green}
              url="https://docs.coinietrade.com/"
              title="Documents"
              captionTitle="Go to documents of CoinieTrade!"
              captionDescription="Hosting pages for documents of CoinieTrade Website"
            />
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemFour}
              colorStyle={portfolioStyles.yellow}
              url="https://github.com/keidrun/coinietrade-front"
              title="Front-End"
              captionTitle="Go to Github of Front-End in CoinieTrade!"
              captionDescription="React App as Front-End of CoinieTrade"
            />
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemFour}
              colorStyle={portfolioStyles.blue}
              url="https://github.com/keidrun/coinietrade-back"
              title="Back-End"
              captionTitle="Go to Github of Back-End in CoinieTrade!"
              captionDescription="Serverless App as Back-End of CoinieTrade"
            />

            <ProjectItem
              sizeStyle={portfolioStyles.projectItemThree}
              colorStyle={portfolioStyles.blue}
              url="https://github.com/keidrun/dept"
              title="CLI Tool for develpment"
              captionTitle="Go to Github of CLI to begin developing quickly!"
              captionDescription="A NPM project"
            />
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemThree}
              colorStyle={portfolioStyles.orange}
              url="https://github.com/keidrun/css-url-loader"
              title="Webpack Loader"
              captionTitle="Go to Github of a webpack loader to transform URLs in css!"
              captionDescription="A NPM project"
            />
            <ProjectItem
              sizeStyle={portfolioStyles.projectItemThree}
              colorStyle={portfolioStyles.pink}
              url="https://github.com/keidrun/reactstrap-scrollspy"
              title="React Library"
              captionTitle="Go to Github of a React library to create an automatically update navigation!"
              captionDescription="A NPM project"
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
