import React, { useEffect } from "react";

function Projects({ setProgress }) {

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  return <h1>Projects page</h1>;
}

export default Projects;
