// @flow
import React from 'react';
import Model from './Model';
import Card from './Card';

const Work = () => (
  <div>
    <section id="work" className="my-work">
      <div className="my-section-content">
        <div className="container">
          <h2>Work Experience</h2>
          <p className="lead">
            I have 6 years experince in total to work as a web application developer and a project
            leader.
          </p>

          <div className="row">
            <div className="col-sm-12">
              <div className="card-group">
                <Card
                  title="Full-stack Development"
                  subTitle="Spring & Ajax & DB"
                  imgSrc="assets/skill1.jpg"
                  modelId="modalOne"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Card>
                <Model id="modalOne" name="modalOneTitle" title="Full-stack Development">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit,
                  voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia porro fugiat
                  quisquam minima repudiandae laboriosam non fuga eius repellat. Impedit, nostrum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit,
                  voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia porro fugiat
                  quisquam minima repudiandae laboriosam non fuga eius repellat. Impedit, nostrum.
                </Model>

                <Card
                  title="Server-side Development"
                  subTitle="Rest API on NodeJS"
                  imgSrc="assets/skill2.jpg"
                  modelId="modelTwo"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi debitis fugit
                  molestias dignissimos, id hic officiis quam possimus tenetur minima voluptatibus
                  accusantium, numquam voluptates velit, dicta maiores dolor quo expedita.
                </Card>
                <Model id="modelTwo" name="modelTwoTitle" title="Server-side Development">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit,
                  voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia porro fugiat
                  quisquam minima repudiandae laboriosam non fuga eius repellat. Impedit, nostrum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit,
                  voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia porro fugiat
                  quisquam minima repudiandae laboriosam non fuga eius repellat. Impedit, nostrum.
                </Model>

                <Card
                  title="Scrum Master"
                  subTitle="Lead some teams"
                  imgSrc="assets/skill3.jpg"
                  modelId="modalThree"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi debitis fugit
                  molestias dignissimos, id hic officiis quam possimus tenetur minima voluptatibus
                  accusantium.
                </Card>
                <Model id="modalThree" name="modalThreeTitle" title="Scrum Master">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit,
                  voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia porro fugiat
                  quisquam minima repudiandae laboriosam non fuga eius repellat. Impedit, nostrum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit,
                  voluptatem tempora vitae animi suscipit, ipsa, recusandae mollitia porro fugiat
                  quisquam minima repudiandae laboriosam non fuga eius repellat. Impedit, nostrum.
                </Model>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Work;
