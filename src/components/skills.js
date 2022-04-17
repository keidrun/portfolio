// @flow
import React from 'react'
import SkillItem from './skillItem'

import * as skillsStyles from './skills.module.scss'

function Skills() {
  return (
    <section id="skills" className={skillsStyles.skills}>
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
              skills={[
                { name: 'Java', star: '50' },
                { name: 'C#', star: '40' },
                { name: 'Node.js', star: '40' },
                { name: 'JavaScript', star: '40' },
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
                { name: 'TypeScript', star: '30' },
                { name: 'Kotlin', star: '30' },
                { name: 'Python', star: '20' },
                { name: 'Go', star: '20' },
                { name: 'Rust', star: '10' },
                { name: 'Swift', star: '10' },
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
                { name: 'HTML', star: '30' },
                { name: 'CSS', star: '30' },
                { name: 'SASS', star: '30' },
                { name: 'React', star: '40' },
                { name: 'Vue', star: '10' },
                { name: 'Spring MVC', star: '30' },
                { name: 'ASP.NET MVC', star: '30' },
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
                { name: 'SQL', star: '30' },
                { name: 'MongoDB', star: '30' },
                { name: 'DynamoDB', star: '20' },
                { name: 'Redis', star: '20' },
                { name: 'Spring', star: '40' },
                { name: 'Spring Boot', star: '30' },
                { name: '.NET', star: '30' },
                { name: 'Express', star: '40' },
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
                { name: 'Kubernetes', star: '20' },
                { name: 'Jenkins', star: '30' },
                { name: 'Travis CI', star: '30' },
                { name: 'Circle CI', star: '30' },
                { name: 'Github Actions', star: '30' },
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
                { name: 'Microsoft Office', star: '30' },
                { name: 'Google Workspace', star: '30' },
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
                { name: 'DApps', star: '10' },
              ]}
            >
              &nbsp;
            </SkillItem>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
