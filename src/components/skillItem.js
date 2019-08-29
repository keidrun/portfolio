// @flow
import React from 'react'

import skillItemStyles from './skillItem.module.scss'

type SkillProps = {
  skillName: string,
  starRate: string,
}

type SkillItemProps = {
  iconClassName: string,
  skillTitle: string,
  skills: Array<{
    name: string,
    star: string,
  }>,
  children: string,
}

const Skill = ({ skillName, starRate }: SkillProps) => (
  <div className={skillItemStyles.skillItem__name}>
    <h4>{skillName}</h4>
    <div className={skillItemStyles.starRating}>
      <div className={`${skillItemStyles.starRatingFront} ${skillItemStyles[`starRatingFrontStar${starRate}`]}`}>
        ★★★★★
      </div>
      <div className={skillItemStyles.starRatingBack}>★★★★★</div>
    </div>
  </div>
)

function SkillItem({ iconClassName, skillTitle, skills, children }: SkillItemProps) {
  return (
    <div className={skillItemStyles.skillItem}>
      <div className={skillItemStyles.skillItem__icon}>
        <span className={iconClassName} />
      </div>
      <h3 className={skillItemStyles.skillItem__title}>{skillTitle}</h3>
      {skills.map(skill => (
        <Skill key={skill.name} skillName={skill.name} starRate={skill.star} />
      ))}
      <p className={skillItemStyles.skillItem__description}>{children}</p>
    </div>
  )
}

export default SkillItem
