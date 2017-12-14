// @flow
import React from 'react';

const Work = () => (
  <div>
    <section id="work" className="my-work">
      <div className="my-work__section-content">
        <div className="container">
          <h2>Work Experience</h2>
          <p className="lead">
            I have 6 years experince in total to work as a web application developer and a project
            leader.
          </p>

          <div className="row">
            <div className="col-sm-12">
              <div className="card-group">
                <div className="card">
                  <div className="card-block my-card__block--decoration">
                    <h4 className="card-title">Full-stack Development</h4>
                    <h6 className="card-subtitle">Spring &amp; Ajax &amp; DB</h6>
                  </div>
                  <img src="assets/skill1.jpg" alt="a chalkboard" />
                  <div className="card-block my-card__block--decoration">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-info my-card__btn"
                      data-toggle="modal"
                      data-target="#modalOne"
                    >
                      More
                    </button>
                  </div>
                </div>
                {/* Modal1 */}
                <div
                  className="modal fade"
                  id="modalOne"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="modalOneTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalOneTitle">
                          Full-stack Development
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        impedit, voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia
                        porro fugiat quisquam minima repudiandae laboriosam non fuga eius repellat.
                        Impedit, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus impedit, voluptatem tempora vitae animi suscipit, ipsa,
                        recusandae mollitia porro fugiat quisquam minima repudiandae laboriosam non
                        fuga eius repellat. Impedit, nostrum.
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block my-card__block--decoration">
                    <h4 className="card-title">Server-side Development</h4>
                    <h6 className="card-subtitle">Rest API on NodeJS</h6>
                  </div>
                  <img src="assets/skill2.jpg" alt="working on a laptop" />
                  <div className="card-block my-card__block--decoration">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi debitis fugit
                      molestias dignissimos, id hic officiis quam possimus tenetur minima
                      voluptatibus accusantium, numquam voluptates velit, dicta maiores dolor quo
                      expedita.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-info my-card__btn"
                      data-toggle="modal"
                      data-target="#modelTwo"
                    >
                      More
                    </button>
                  </div>
                </div>
                {/* Modal2 */}
                <div
                  className="modal fade"
                  id="modelTwo"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="modelTwoTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modelTwoTitle">
                          Server-side Development
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        impedit, voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia
                        porro fugiat quisquam minima repudiandae laboriosam non fuga eius repellat.
                        Impedit, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus impedit, voluptatem tempora vitae animi suscipit, ipsa,
                        recusandae mollitia porro fugiat quisquam minima repudiandae laboriosam non
                        fuga eius repellat. Impedit, nostrum.
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block my-card__block--decoration">
                    <h4 className="card-title">Scrum Master</h4>
                    <h6 className="card-subtitle">Lead some teams</h6>
                  </div>
                  <img src="assets/skill3.jpg" alt="fingers typing on a keyboard" />
                  <div className="card-block my-card__block--decoration">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi debitis fugit
                      molestias dignissimos, id hic officiis quam possimus tenetur minima
                      voluptatibus accusantium.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-info my-card__btn"
                      data-toggle="modal"
                      data-target="#modalThree"
                    >
                      More
                    </button>
                  </div>
                </div>
                {/* Modal3 */}
                <div
                  className="modal fade"
                  id="modalThree"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="modalThreeTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modalThreeTitle">
                          Scrum Master
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        impedit, voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia
                        porro fugiat quisquam minima repudiandae laboriosam non fuga eius repellat.
                        Impedit, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus impedit, voluptatem tempora vitae animi suscipit, ipsa,
                        recusandae mollitia porro fugiat quisquam minima repudiandae laboriosam non
                        fuga eius repellat. Impedit, nostrum.
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Work;
