// @flow
import React from 'react';
import SocialBtnGroup from './SocialBtnGroup';

const About = () => (
  <div>
    <section id="about" className="my-about">
      <div className="my-section-content">
        <div className="container">
          <div className="col-md-6">
            <div className="my-about__text">
              <h3>About me</h3>
              <p className="lead">
              I&#39;m looking for a job of a full-stack JavaScript application developer
              or a back-end NodeJS application developer in Canada.
              If you&#39;re looking for an excellent developer, contact me!
              </p>
              <p>
                I have 6 years practical experience in total
                as a full-stack web application developer.
                (See <span className="p-link"><a href="/#skills"><strong>Skills</strong></a></span> and <span className="p-link"><a href="/#work"><strong>Work</strong></a></span> sections)
                My dream is to found my outstanding company
                and change people&#39;s life in the world.
                I&#39;m thinking of starting my own business several years later.
                Now I&#39;d like to focus on a JavaScript development
                because a recent intesting technologies come into being around JavaScript.
                Then, I launched a website with JavaScript recently. (See a <span className="p-link"><a href="/#portfolio"><strong>Portfolio</strong></a></span> section)
                If you&#39;re looking for a curious and entusiastic developer,
                I&#39;m a perfect choice.
              </p>
              <h5>Feel free to contact me!</h5>
              <SocialBtnGroup section="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
