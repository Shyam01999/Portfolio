import React, { useEffect } from "react";
import htmlimage from "../../public/images/html image.png";
import cssimage from "../../public/images/css image.png";
import jsimage from "../../public/images/js image.png";
import reactimage from "../../public/images/react js image.png";
import reduximage from "../../public/images/redux.png";
import routerimage from "../../public/images/react router.png";
import nodejsimage from "../../public/images/node js image.png";
import expressjsimage from "../../public/images/express js image.jpg";
import sqlimage from "../../public/images/sql image.png";
import postgressqimage from "../../public/images/postgressql image.png";
import githubimage from "../../public/images/github image.png";
import nginximage from "../../public/images/nginx image.png";
import pm2image from "../../public/images/pm2 image.png";
import postmanimage from "../../public/images/postman image.png";
import vscodeimage from "../../public/images/vs code image.jpg";
import upcommingimage from "../../public/images/upcoming image.png";

function Skills({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  return (
    <>
      {/*Skills Section*/}
      <section className="skills-section">
        <div className="container ">
          <div className="common-title-container">
            <h2 className="title">My Skills</h2>
          </div>
          <div className="cards grid grid-three-cols">
            <div className="skills-card">
              <img src={htmlimage} alt="image not available" />
              <h2>Html</h2>
            </div>
            <div className="skills-card">
              <img src={cssimage} alt="image not available" />
              <h2>Css</h2>
            </div>
            <div className="skills-card">
              <img src={jsimage} alt="image not available" />
              <h2>Java Script</h2>
            </div>
            <div className="skills-card">
              <img src={reactimage} alt="image not available" />
              <h2>React</h2>
            </div>
            <div className="skills-card">
              <img src={reduximage} alt="image not available" />
              <h2>Redux</h2>
            </div>
            <div className="skills-card">
              <img src={routerimage} alt="image not available" />
              <h2>React Router</h2>
            </div>
            <div className="skills-card">
              <img src={nodejsimage} alt="image not available" />
              <h2>Node js</h2>
            </div>
            <div className="skills-card">
              <img src={expressjsimage} alt="image not available" />
              <h2>Express js</h2>
            </div>
            <div className="skills-card">
              <img src={sqlimage} alt="image not available" />
              <h2>Sql</h2>
            </div>
            <div className="skills-card">
              <img src={postgressqimage} alt="image not available" />
              <h2>Postgre Sql</h2>
            </div>
            <div className="skills-card">
              <img src={githubimage} alt="image not available" />
              <h2>Git Hub</h2>
            </div>
            <div className="skills-card">
              <img src={nginximage} alt="image not available" />
              <h2>Nginx</h2>
            </div>
            <div className="skills-card">
              <img src={pm2image} alt="image not available" />
              <h2>Pm2</h2>
            </div>
            <div className="skills-card">
              <img src={vscodeimage} alt="image not available" />
              <h2>VS Code</h2>
            </div>
            <div className="skills-card">
              <img src={postmanimage} alt="image not available" />
              <h2>Postman</h2>
            </div>
            <div className="skills-card">
              <img src={upcommingimage} alt="image not available" />
              <h2>Upcommings</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
