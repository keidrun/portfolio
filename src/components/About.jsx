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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima culpa nostrum
                voluptates praesentium quia, quae, dolor aperiam possimus architecto, tempore unde!
                Quasi fugit voluptate, maiores adipisci commodi nemo rem cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eum mollitia sit
                dolorem autem qui possimus ex voluptate, voluptatibus iste unde numquam illum,
                molestiae reprehenderit, eligendi. Illum quod esse voluptatibus.
              </p>
              <h5>Follow &amp; Contact me!</h5>
              <SocialBtnGroup section="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
