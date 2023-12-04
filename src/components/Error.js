import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log("error ==>", error);
  return (
    <div className="error-page">
      <div className="error-page-child">
        <h1>Oops !!!</h1>
        <h2>Something went wrong!!!</h2>
        <h3>
          {error.status}: {error.statusText}
        </h3>
        <p className="error-data">{error.data}</p>
      </div>
    </div>
  );
};

export default Error;
