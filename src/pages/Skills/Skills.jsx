import React from "react";

import FirstData from "../../data/FirstSkills";
import SecondData from "../../data/SecondSkills";

import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <p>Main abilities</p>
      <div className="skills__block">
        {FirstData.map((skill, index) => (
          <div key={index} className="skills__block__item">
            <div className="skills__block__item__title">{skill.title}</div>
            <img src={`img/skill_logo/${skill.img}`} 
              className="skills__block__item__img" 
              alt="skill-img" />
          </div>
        ))}
      </div>
      <p>Interested in</p>
      <div className="skills__block">
        {SecondData.map((skill, index) => (
          <div key={index} className="skills__block__item">
            <div className="skills__block__item__title">{skill.title}</div>
            <img src={`img/skill_logo/${skill.img}`} 
              className="skills__block__item__img" 
              alt="skill-img" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
