import React from "react";

import frstData from "../../data/FirstSkills";
import secData from "../../data/SecondSkills";

import "./Skills.css";

function Skills() {
  return (
    <div className="skl">
      <p>Main abilities</p>
      <div className="firstSkillsBlock">
        {frstData.map((skill, index) => (
          <div key={index} className="skill__box">
            <div className="skill__title">{skill.title}</div>
            <img src={`img/skill_logo/${skill.img}`} className="skill__img" alt="skill-img" />
          </div>
        ))}
      </div>
      <p>Interested in</p>
      <div className="secondSkillsBlock">
        {secData.map((skill, index) => (
          <div key={index} className="skill__box">
            <div className="skill__title">{skill.title}</div>
            <img src={`img/skill_logo/${skill.img}`} className="skill__img" alt="skill-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
