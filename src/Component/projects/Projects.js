import React from "react";

const Projects = () => {
  return (
    <div id="Service">
      <hr />

      <h3>My Projects </h3>
      <div className="card-res">
        <div className="cards flex">
          <div className="card-1 insidecard">
            <img src="imgs/textutil.png" alt="logo" width={45} />
            <h2>TextUtile Web</h2>
            <p>
              In the app we are explore over text uppercase to lowercase,
              loWercase to uppercase and many more. <i>Skills</i> Pure React.js
              and Javascript Web, And few Boostrap properties are also include
            </p>
            <a
              href="https://github.com/ashutoshpariharr/TextUtils"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="card-2 insidecard">
            <img src="imgs/pf.jpg" alt="logo" width={45} />
            <h2>Portfolio</h2>
            <p>
              Scroll all this website this is my personal portfolio. In this I'm
              using <i>JSX</i> Syntax and more react.js functionality in this
              portfolio explore this web and send me meassege
            </p>
            <a href="https://github.com/ashutoshpariharr">Learn More</a>
          </div>

          <div className="card-3 insidecard cardeffect">
            <img src="imgs/Weather.jpg" alt="logo" width={45} />
            <h2>Weather APP</h2>
            <p>
              Creat with the weather API keys. <i> Skills </i>
              Pure HTML CSS and JavaScript. <i>About</i> Responsive Web Design
              <i>Features</i> Teamprature, Wind speed, Humandity etc. explore
              this app and use with your conditions.
            </p>
            <a
              href="https://github.com/ashutoshpariharr/Weather"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <br />

        <div className="cardsSeconds flex">
          <div className="card-1 insidecard">
            <img src="imgs/calculator.png" alt="logo" width={45} />
            <h2>Calculator</h2>
            <p>
              Calculator <i>Skills</i> Pure HTML, CSS, and JavaScript. Great
              UI/UX design and Responsive use in any screen. More calculation
              with minimum time and fast to use.
            </p>
            <a
              href="https://github.com/ashutoshpariharr/Calculator"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="card-2 insidecard cardeffect">
            <img src="imgs/logo.png" alt="logo" width={45} />
            <h2>Web Design</h2>
            <p>
              Look at this Car Dekho sample with my UI idea and many
              functionality to make user attractive to this web site and user
              frandly<i>HTML, CSS, JavaScript, Boostrap etc.</i>
            </p>
            <a
              href="https://github.com/ashutoshpariharr/Unbundl-task2"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="card-3 insidecard cardeffect">
            <img src="imgs/blog.png" alt="logo" width={45} />
            <h2>Blog Web</h2>
            <p>
              A physics teacher portfolio sample with attractive UI and UX more
              functionality
              <i>Skills</i> Using pure HTML, CSS, JavaScript give functionality
              like inroll class and many more.
            </p>
            <a
              href="https://github.com/ashutoshpariharr/Teacher-website"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
