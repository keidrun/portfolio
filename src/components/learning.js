// @flow
import React from 'react'

import learningStyles from './learning.module.scss'

const Learning = () => (
  <div>
    <section id="learning" className={learningStyles.myLearning}>
      <div className={learningStyles.mySectionContent}>
        <div className="container">
          <div className="col-md-6 mr-auto">
            <div className={learningStyles.myLearning__text}>
              <h3>Learning</h3>
              <p className="lead">
                I absolutely love to learn new technologies. Recently, I&#39;m learning GraphQL, GatsbyJS, AWS Lambda,
                Machine-learning and Blockchain.
              </p>
              <p>
                I have kept blogging to share my knowledge since 2013. The concepts are learning technologies and
                English. The Page View is +10,000 a month, then 90% readers are Japanese people, 5% readers are people
                in North America like US or Canada and other readers are pepole in other countries. I&#39;m certain that
                my blog site is very informative for beginner or intermidiate developers. However, I won&#39;t make it
                public so far because I post under a pseudonym. If you&#39;d like to know it more deeply, just please
                ask me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Learning