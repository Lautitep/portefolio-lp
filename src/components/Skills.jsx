import React, { useEffect } from 'react';
import "./style/skills.css";
import TagCloud from 'TagCloud';


const Skills = () => {
  // Animated settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "React",
        "NodeJS",
        "Express",
        "Ruby On Rails",
        "MongoDB",
        "JavaScript",
        "GIT",
        "GitHub",
        "Heroku",
        "Figma",
        "TypeScript",
      ];

      const options = {
        radius: 200,
        maxSpeed: "slow",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    }
  }, []);

  return (
    <div className='text-sphere'>
      <span className='tagcloud'></span>
    </div>
  )
}

export default Skills;
