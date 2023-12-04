import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("setinterval called");
    }, 1000);
    return () => {
      console.log("in useEffect return");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>ContactUs Page</h1>
    </div>
  );
};

export default ContactUs;
