import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Educations from "./Educations";
import { useState } from "react";


const Aboutall = () => {
  const [skillData, setSkillData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [educationData, setEducationData] = useState(false);

  return (
    <div id="About">
      <div className="container">
        <div className="about">
          <div className="row">
            <div className="about-col-1">
              <img src="imgs/Second.jpg" alt="SideImage" />
            </div>
            <div className="about-col-2">


              <h1>About Me</h1>
              <p>
                "Hello, I'm Ashutosh, a passionate front-end developer with a
                strong drive to expand my skill set. Currently, I'm on an
                exciting journey to learn back-end development, broadening my
                capabilities in the world of web development. <br />
                I am actively seeking opportunities for a job or internship
                where I can apply my front-end expertise while also honing my
                newly acquired back-end skills. I thrive in collaborative
                environments and am eager to contribute to innovative projects
                that push the boundaries of web development.
                <br />
                Let's connect and explore how we can collaborate to create
                exceptional web experiences. Feel free to reach out if you're
                looking for a dedicated developer ready to make a meaningful
                impact."
              </p>

              <div className="tab-title">
                <p
                  onClick={() =>
                    setSkillData(true) &
                    setExperienceData(false) &
                    setEducationData(false)
                  }
                  className="tab-links"
                >
                  Skills
                </p>
                <p
                  onClick={() =>
                    setExperienceData(true) &
                    setSkillData(false) &
                    setEducationData(false)
                  }
                  className="tab-links"
                >
                  Experience
                </p>
                <p
                  onClick={() =>
                    setEducationData(true) &
                    setExperienceData(false) &
                    setSkillData(false)
                  }
                  className="tab-links"
                >
                  Educations
                </p>
              </div>

              {skillData && <Skills />}
              {experienceData && <Experience />}
              {educationData && <Educations />}

              {/* <Skills /> */}
              {/* <Experience /> */}
              {/* <Educations /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutall;
