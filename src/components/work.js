// @flow
import React from 'react'
import Model from './model'
import Card from './card'
import { IMG_SRC_PREFIX } from '../config'

import workStyles from './work.module.scss'

const Work = () => (
  <div>
    <section id="work" className={workStyles.myWork}>
      <div className={workStyles.mySectionContent}>
        <div className="container">
          <h2>Professional Experience</h2>
          <p className="lead">
            I’ve been designing and developing web applications as professional JavaScript and Java developer since
            2011.
          </p>

          <div className="row">
            <div className="col-sm-12">
              <div className="card-group">
                <Card
                  title="Back-End Development"
                  subTitle="NodeJS RESTful API & MongoDB"
                  imgSrc={`${IMG_SRC_PREFIX}assets/skill2.jpg`}
                  modelId="modelTwo"
                >
                  Designed and developed an API gateway application to collect several kinds of data from many back-end
                  applications with NodeJS and MongoDB for customers in a convenience stores company.
                </Card>
                <Model id="modelTwo" name="modelTwoTitle" title="Back-End Development">
                  <h6>API Gateway Development for customers in a convenience stores company</h6>
                  <ul>
                    <li>
                      Designed an application architecture for the API gateway application to collect several kinds of
                      data from existing back-end APIs
                    </li>
                    <li>Developed the API gateway application with NodeJS and MongoDB, and Released it on AWS</li>
                  </ul>
                </Model>
                <Card
                  title="Full-Stack Development"
                  subTitle="Spring MVC & Ajax & SQL"
                  imgSrc={`${IMG_SRC_PREFIX}assets/skill1.jpg`}
                  modelId="modelOne"
                >
                  Designed and developed web applications with Spring MVC, Ajax and SQL for customers in a cellular
                  company and a financial company.
                </Card>
                <Model id="modelOne" name="modelOneTitle" title="Full-stack Development">
                  <h6>
                    Web front-end replacement project with Spring MVC and MySQL for customers in customers in a cellular
                    company
                  </h6>
                  <ul>
                    <li>
                      The purpose of this project was to develop new web front-end and replace existing front-end, and
                      improve back-end applications to collect new data
                    </li>
                    <li>Developed the front-end as one of developers with Spring MVC and Ajax</li>
                    <li>Improved some back-end applications as one of developers with Spring Framework and MySQL</li>
                    <li>
                      Arranged specifications of other existing back-end APIs and develop mock applications with NodeJS
                      for testing
                    </li>
                  </ul>
                  <h6>Web Front-end Development with Spring MVC and PostgreSQL for customers in credit card company</h6>
                  <ul>
                    <li>
                      The purpose of this project was to develop new featuers for existing web front-end along with
                      adding new business process to sell debit cards
                    </li>
                    <li>
                      Developed new features with Spring MVC and PostgreSQL to let the web front-end adapt the new
                      process
                    </li>
                  </ul>
                </Model>
                <Card
                  title="Framework Development"
                  subTitle="Spring Framework & Netty"
                  imgSrc={`${IMG_SRC_PREFIX}assets/skill3.jpg`}
                  modelId="modelThree"
                >
                  Designed and developed an application framework with Spring Framework and Netty to process big data
                  from many devices, then implemented it for another team of customers in a convenience stores company.
                </Card>
                <Model id="modelThree" name="modelThreeTitle" title="Framework Development">
                  <h6>
                    Back-end Application Framework Development for M2M (Machine to machine) with Spring Framework and
                    Netty
                  </h6>
                  <ul>
                    <li>
                      Designed the application architecture to process big data that are collected via SOAP/XML/JSON
                      communication from any devices concurrently
                    </li>
                    <li>Developed a JSON communication feature with Spring Framework and tested with JUnit</li>
                    <li>
                      Developed a GUI application to simulate any communication from any sensor with Swing for testing
                      an application implemented the framework
                    </li>
                    <li>
                      Applied the framework to communicate with GCON that is an experimental sensor developed by another
                      team of customers in a convenience stores company
                    </li>
                  </ul>
                </Model>
              </div>
              <div className="card-group">
                <Card
                  title="Scrum Coaching"
                  subTitle="Scrum Master"
                  imgSrc={`${IMG_SRC_PREFIX}assets/skill4.jpg`}
                  modelId="modelFour"
                >
                  Built new development teams and coached them in Scrum as Scrum Master for customers in a cellular
                  company.
                </Card>
                <Model id="modelFour" name="modelFourTitle" title="Scrum Coaching">
                  <h6>Web Front-end Replacement Project for customers in a convenience stores company</h6>
                  <ul>
                    <li>Created documents to explain Scrum for customers</li>
                    <li>
                      Built new development teams to develop new web front-end and coached them in Scrum as Scrum Master
                    </li>
                  </ul>
                </Model>
                <Card
                  title="Product Management"
                  subTitle="Product Owner for PoC with offshore teams"
                  imgSrc={`${IMG_SRC_PREFIX}assets/skill5.jpg`}
                  modelId="modelFive"
                >
                  Planed as Product Owner for PoC (Proof of Concept) to demonstrate the effectiveness of Scrum
                  Development, organized and managed offshore teams of developers in China in an in-house project.
                </Card>
                <Model id="modelFive" name="modelFiveTitle" title="Product Management">
                  <h6>
                    PoC (Proof of Concept) to demonstrate the effectiveness of Scrum Development with offshore teams
                  </h6>
                  <ul>
                    <li>
                      The purpose of this project was to judge to establish a new department for Scrum by demonstrating
                      the effectiveness of Scrum Development with offshore teams
                    </li>
                    <li>
                      Organized a new team to set up a new department to push ahead with Scrum development to the
                      company and its client enterprises
                    </li>
                    <li>
                      Created product backlogs and managed offshore Scrum teams in China to develop sample iOS/Android
                      apps and assessed the effectiveness
                    </li>
                    <li>Succeeded to establish a new department for Scrum</li>
                  </ul>
                </Model>
                <Card
                  title="Project Management"
                  subTitle="Project Lead to manage global teams"
                  imgSrc={`${IMG_SRC_PREFIX}assets/skill6.jpg`}
                  modelId="modelSix"
                >
                  Planed and managed global teams of developers in Japan and China to develop web applications and
                  native apps for customers in financial companies and a Japanese government office.
                </Card>
                <Model id="modelSix" name="modelSixTitle" title="Project Management">
                  <h6>Web Front-end Development for customers in a Japanese government office</h6>
                  <ul>
                    <li>Conducted an interview with the client and planed the project</li>
                    <li>
                      Managed an in-house team in Japan and an offshore team in China and developed a new web front-end
                      to distribute debit cards and control purchase of welfare-payment recipients in the city
                    </li>
                  </ul>
                  <h6>Web Front-end Development for customers in financial companies</h6>
                  <ul>
                    <li>Conducted an interview with the client and planed the project</li>
                    <li>
                      Founded new teams that include a team in Japan and an offshore team in China, managed them and
                      developed new features to let the web front-end adapt new business process
                    </li>
                  </ul>
                </Model>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Work
