import React, { useEffect } from "react";

function Contact({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  return <h1>Contact us page</h1>;
}

export default Contact;
