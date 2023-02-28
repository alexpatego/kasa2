import React, { useEffect } from "react";
import bgabout from "../../assets/aboutbg.jpg";
import Collapse from "../../components/Collapse/Collapse";
import aboutText from "../../data/aboutArray.json";

const About = () => {
  useEffect(() => {
    document.title = "A propos";
  }, []);

  return (
    <div className="about">
      <img src={bgabout} className="about__img" alt="bannière" />
      <div className="about__infos">
        {aboutText.map((about, index) => (
          <Collapse title={about.title} key={about.id + index}>
            {about.description}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
