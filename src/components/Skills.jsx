// @flow
import React from 'react';
import SkillItem from './SkillItem';

const Skills = () => (
  <div>
    <section id="skills" className="my-skills">
      <div className="my-section-content">
        <div className="container">
          <h2>Skills</h2>
          <p className="lead">
            I always adore learning new technologies. I show you my skills. Ask
            me in an interview if you&#39;d like to know them in details.
          </p>

          <hr />

          <div className="row multi-columns-row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-desktop"
                skillTitle="Professional Language"
                skills={[
                  { name: 'ES6', star: '50' },
                  { name: 'NodeJS', star: '50' },
                  { name: 'Java', star: '50' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-genius"
                skillTitle="Secondary Language"
                skills={[
                  { name: 'Python', star: '30' },
                  { name: 'Kotlin', star: '30' },
                  { name: 'Go', star: '20' },
                  { name: 'Ruby', star: '20' },
                  { name: 'Perl', star: '20' },
                  { name: 'C', star: '20' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-browser"
                skillTitle="Front-end stack"
                skills={[
                  { name: 'HTML5', star: '40' },
                  { name: 'CSS3', star: '40' },
                  { name: 'SASS', star: '30' },
                  { name: 'React/Redux', star: '50' },
                  { name: 'ReactNative', star: '20' },
                  { name: 'Anguler', star: '20' },
                  { name: 'Vue', star: '20' },
                  { name: 'SpringMVC', star: '40' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-gears"
                skillTitle="Back-end stack"
                skills={[
                  { name: 'Linux', star: '40' },
                  { name: 'Heroku', star: '30' },
                  { name: 'AWS', star: '30' },
                  { name: 'Lambda', star: '30' },
                  { name: 'SQL', star: '40' },
                  { name: 'MongoDB', star: '40' },
                  { name: 'DynamoDB', star: '30' },
                  { name: 'Express', star: '50' },
                  { name: 'SpringBoot', star: '50' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-tools-2"
                skillTitle="Dev-Ops stack"
                skills={[
                  { name: 'Git/GitHub', star: '40' },
                  { name: 'Docker', star: '40' },
                  { name: 'Vagrant', star: '30' },
                  { name: 'Ansible', star: '30' },
                  { name: 'Jenkins', star: '30' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-global"
                skillTitle="Team work"
                skills={[
                  { name: 'Agile', star: '50' },
                  { name: 'Scrum', star: '50' },
                  { name: 'Jira', star: '30' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-bargraph"
                skillTitle="Documentation"
                skills={[
                  { name: 'Markdown', star: '50' },
                  { name: 'PowerPoint', star: '50' },
                  { name: 'Excel', star: '40' },
                  { name: 'Word', star: '30' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-puzzle"
                skillTitle="Others"
                skills={[
                  { name: 'Passion', star: '50' },
                  { name: 'Japanese', star: '50' },
                  { name: 'Machine-learning', star: '10' },
                  { name: 'Blockchain', star: '10' },
                ]}
              >
                &nbsp;
              </SkillItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
