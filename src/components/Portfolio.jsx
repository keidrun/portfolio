// @flow
import React from 'react';

const Portfolio = () => (
  <div>
    <section id="portfolio" className="my-portfolio">
      <div className="my-section-content">
        <div className="container">
          <h3>Portfolio</h3>
          <p className="lead">
            I&#39;m driving my own projects. I show you some interesting projects I picked up.<br />
            <small>*I cannot show you all projects
            like my achivements of my previous company&#39;s projects
            because of the duty of confidentiality. Ask me in an interview.
            </small>
          </p>

          <hr />

          <div className="row">
            <ul className="projects-grid projects-grid--gut projects-hover">
              <li className="project-item-3of3">
                <a href="https://www.coinietrade.com/" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-item-3of3__name orange">CoinieTrade website</h3>
                  <div className="project-item-3of3__caption">
                    <h3 className="project-item-3of3__title">Go to CoinieTrade website!</h3>
                    <div className="project-item-3of3__description">Website for monitoring and trading bitcoin</div>
                  </div>
                </a>
              </li>

              <li className="project-item-1of3">
                <a href="https://github.com/keidrun/coinietrade-proxy" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-item-1of3__name red">Source Code of Proxy</h3>
                  <div className="project-item-1of3__caption">
                    <h3 className="project-item-1of3__title">Go to Github of Proxy in CoinieTrade!</h3>
                    <div className="project-item-1of3__description">A Part of CoinieTrade</div>
                  </div>
                </a>
              </li>

              <li className="project-item-1of3">
                <a href="https://github.com/keidrun/coinietrade-front" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-item-1of3__name yellow">Source Code of Front-end</h3>
                  <div className="project-item-1of3__caption">
                    <h3 className="project-item-1of3__title">Go to Github of Front-end in CoinieTrade!</h3>
                    <div className="project-item-1of3__description">A Part of CoinieTrade</div>
                  </div>
                </a>
              </li>

              <li className="project-item-1of3">
                <a href="https://github.com/keidrun/coinietrade-back" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-item-1of3__name">Source Code of Back-end</h3>
                  <div className="project-item-1of3__caption">
                    <h3 className="project-item-1of3__title">Go to Github of Back-end in CoinieTrade!</h3>
                    <div className="project-item-1of3__description">A Part of CoinieTrade</div>
                  </div>
                </a>
              </li>

              <li className="project-item-1of3">
                <a href="https://github.com/keidrun/coinietrade-native" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-item-1of3__name green">Coming Soon ...</h3>
                  <div className="project-item-1of3__caption">
                    <h3 className="project-item-1of3__title">Go to Github of Native App in CoinieTrade!</h3>
                    <div className="project-item-1of3__description">A Part of CoinieTrade</div>
                  </div>
                </a>
              </li>

              <li className="project-item-2of3">
                <a href="https://doc.coinietrade.com/" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-item-2of3__name pink">Documents of CoinieTrade</h3>
                  <div className="project-item-2of3__caption">
                    <h3 className="project-item-2of3__title">Go to documents of CoinieTrade!</h3>
                    <div className="project-item-2of3__description">Documents of CoinieTrade website</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;
