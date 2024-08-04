import React, { useEffect } from "react";

function Services({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  return <h1>Services page</h1>;
}

export default Services;
