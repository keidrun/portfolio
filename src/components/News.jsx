// @flow
import React from 'react';

const News = () => (
  <div>
    <section id="news">
      <div className="section-content">
        <div className="container">
          <h3>My News</h3>
          <p className="lead">
            I love to learn the newest technology and design. Show some events I joined and my open
            projects.
          </p>
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <div className="card-columns">
                <div className="card card-block text-center my-card-block--decoration">
                  <h4 className="card-title">Arrived at Canada!</h4>
                  <p className="card-text">
                    Finally I arrived at Canada. I feel so exited. I will study English and then
                    work here as developer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">2017/11/30</small>
                  </p>
                </div>
                <div className="card">
                  <img
                    className="card-img"
                    src="assets/event1.jpg"
                    alt="A desktop with a computer on it"
                  />
                </div>

                <div className="card">
                  <img
                    className="card-img"
                    src="assets/event2.jpg"
                    alt="A desktop with a computer on it"
                  />
                </div>
                <div className="card card-block text-center my-card-block--decoration">
                  <h4 className="card-title">Boireplate Project Begining...</h4>
                  <p className="card-text">
                    I began a new own project, whose name is Boireplate Project. It is a project
                    that collect boireplates to make any project start easily.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">2017/11/28</small>
                  </p>
                </div>

                <div className="card card-block text-center my-card-block--decoration">
                  <h4 className="card-title">Joined Spring One Conference</h4>
                  <p className="card-text">
                    I joined Spring One Platform, which is the biggest Java conference. I knew next
                    Spring project features for naitive cloud.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">2016/8/1 to 8/4</small>
                  </p>
                </div>
                <div className="card">
                  <img
                    className="card-img"
                    src="assets/event3.jpg"
                    alt="A desktop with a computer on it"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default News;
