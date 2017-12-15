// @flow
import React from 'react';
import SkillItem from './SkillItem';

const Skills = () => (
  <div>
    <section id="skills" className="my-skills">
      <div className="my-section-content">
        <div className="container">
          <h2>Skills</h2>
          <p className="lead">I love to learn the newest technology and design. Show my skills.</p>

          <hr />

          <div className="row multi-columns-row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-desktop"
                skillTitle="Professional Language"
                skills={[
                  { name: 'Java', star: '50' },
                  { name: 'NodeJS', star: '50' },
                  { name: 'Native JS', star: '40' },
                  { name: 'ES6', star: '50' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-genius"
                skillTitle="Secondary Language"
                skills={[
                  { name: 'Kotlin', star: '30' },
                  { name: 'Go', star: '20' },
                  { name: 'Haskell', star: '10' },
                  { name: 'Python', star: '20' },
                  { name: 'Ruby', star: '20' },
                  { name: 'Perl', star: '20' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-browser"
                skillTitle="Front-end stack"
                skills={[
                  { name: 'HTML5', star: '30' },
                  { name: 'CSS3', star: '30' },
                  { name: 'SASS', star: '30' },
                  { name: 'React/Redux', star: '50' },
                  { name: 'SpringMVC', star: '50' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-gears"
                skillTitle="Back-end stack"
                skills={[
                  { name: 'Linux', star: '40' },
                  { name: 'AWS', star: '30' },
                  { name: 'SQL', star: '40' },
                  { name: 'MongoDB', star: '40' },
                  { name: 'Spring/SpringBoot', star: '50' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-tools-2"
                skillTitle="Dev-Ops stack"
                skills={[
                  { name: 'Git/GitHub', star: '50' },
                  { name: 'Vagrant', star: '30' },
                  { name: 'Docker', star: '40' },
                  { name: 'Ansible', star: '30' },
                  { name: 'Jenkins', star: '40' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-global"
                skillTitle="Team work"
                skills={[
                  { name: 'Agile', star: '50' },
                  { name: 'Scrum', star: '50' },
                  { name: 'Trac', star: '30' },
                  { name: 'Redmine', star: '30' },
                  { name: 'Jira', star: '40' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-bargraph"
                skillTitle="Documentation"
                skills={[
                  { name: 'Markdown', star: '50' },
                  { name: 'PowerPoint', star: '50' },
                  { name: 'Word', star: '30' },
                  { name: 'Excel', star: '40' },
                ]}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-puzzle"
                skillTitle="Others"
                skills={[
                  { name: 'English', star: '30' },
                  { name: 'Japanese', star: '50' },
                  { name: 'Smile', star: '50' },
                  { name: 'Passion', star: '50' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
