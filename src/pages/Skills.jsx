import React, { useEffect } from "react";

function Skills({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  return <h1>Skills page</h1>;
}

export default Skills;
