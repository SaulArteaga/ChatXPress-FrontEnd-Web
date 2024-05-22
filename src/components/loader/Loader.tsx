import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="container text-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
