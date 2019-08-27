// @flow
import React from 'react'
import SkillItem from './skillItem'

import skillsStyles from './skills.module.scss'

const Skills = () => (
  <div>
    <section id="skills" className={skillsStyles.mySkills}>
      <div className={skillsStyles.mySectionContent}>
        <div className="container">
          <h2>Skills</h2>
          <p className="lead">
            I always adore learning new technologies and growing my skills. My current skills are below.
          </p>

          <hr />

          <div className="row multi-columns-row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-desktop"
                skillTitle="Professional Language"
                skills={[{ name: 'ES6+', star: '50' }, { name: 'NodeJS', star: '50' }, { name: 'Java', star: '50' }]}
              >
                &nbsp;
              </SkillItem>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <SkillItem
                iconClassName="icon-genius"
                skillTitle="Secondary Language"
                skills={[
                  { name: 'TypeScript', star: '30' },
                  { name: 'Python', star: '30' },
                  { name: 'Kotlin', star: '30' },
                  { name: 'Go', star: '30' },
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
                  { name: 'CSS3', star: '30' },
                  { name: 'SASS', star: '20' },
                  { name: 'Webpack', star: '40' },
                  { name: 'React/Redux', star: '40' },
                  { name: 'ReactNative', star: '10' },
                  { name: 'Vue', star: '20' },
                  { name: 'Anguler', star: '10' },
                  { name: 'Spring MVC', star: '30' },
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
                  { name: 'AWS', star: '30' },
                  { name: 'AWS Lambda', star: '30' },
                  { name: 'Heroku', star: '30' },
                  { name: 'SQL', star: '40' },
                  { name: 'MongoDB', star: '30' },
                  { name: 'DynamoDB', star: '20' },
                  { name: 'Express Framework', star: '50' },
                  { name: 'Spring Framework', star: '50' },
                  { name: 'Spring Boot', star: '30' },
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
                  { name: 'Ansible', star: '20' },
                  { name: 'Jenkins', star: '30' },
                  { name: 'Travis CI', star: '30' },
                  { name: 'Circle CI', star: '30' },
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
                  { name: 'Redmine', star: '30' },
                  { name: 'Trac', star: '30' },
                  { name: 'Slack', star: '30' },
                  { name: 'HipChat', star: '30' },
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
)

export default Skills
