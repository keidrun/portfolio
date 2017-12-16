// @flow
import React from 'react';

type SkillProps = {
  skillName: string,
  starRate: string,
};

type SkillItemProps = {
  iconClassName: string,
  skillTitle: string,
  skills: Array,
};

const Skill = ({ skillName, starRate }: SkillProps) => (
  <div className="skill-item__name">
    <h4>{skillName}</h4>
    <div className="star-rating">
      <div className={`star-rating-front star-rating-front-star${starRate}`}>★★★★★</div>
      <div className="star-rating-back">★★★★★</div>
    </div>
  </div>
);

const SkillItem = ({ iconClassName, skillTitle, skills }: SkillItemProps) => (
  <div className="skill-item">
    <div className="skill-item__icon">
      <span className={iconClassName} />
    </div>
    <h3 className="skill-item__title">{skillTitle}</h3>
    {skills.map(skill => <Skill key={skill.name} skillName={skill.name} starRate={skill.star} />)}
  </div>
);

export default SkillItem;
