// @flow
import React from 'react'

import careerStyles from './career.module.scss'

const Career = () => (
  <div>
    <section id="career" className={careerStyles.myCareer}>
      <div className={careerStyles.mySectionContent}>
        <div className="container">
          <div className="col-md-6 ml-auto">
            <div className={careerStyles.myCareer__text}>
              <h3>Career</h3>
              <p className="lead">
                I got a master&#39;s degree of computer science in a Japanese university. After I graduated from the
                university, I&#39;ve worked in a Japanese tech companey as a full-stack web application developer and a
                project leader for 6 years. After I quit the companey, I&#39;ve stayed in Philippines to learn English
                for several months, then I moved to Canada to keep learning English and I&#39;m seeking opportunities of
                a JavaScript developer job now.
              </p>
              <ul>
                <li>
                  <span className="p-link">
                    <a href="https://www.nttdata.com/global/en/" target="_blank" rel="noopener noreferrer">
                      <strong>NTT DATA Corporation (Tokyo, Japan)</strong>
                    </a>
                  </span>
                  , JavaScript and Java Developer, April 2011 - March 2017
                </li>
                <li>
                  <span className="p-link">
                    <a href="https://www.tsukuba.ac.jp/en/" target="_blank" rel="noopener noreferrer">
                      <strong>University of Tsukuba (Ibaraki, Japan)</strong>
                    </a>
                  </span>
                  , Master of Computer Science, April 2009 - March 2011
                </li>
                <li>
                  <span className="p-link">
                    <a href="https://www.yamagata-u.ac.jp/en/" target="_blank" rel="noopener noreferrer">
                      <strong>Yamagata University (Yamagata, Japan)</strong>
                    </a>
                  </span>
                  , Bachelor of Computer Science, April 2005 - March 2009
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Career
