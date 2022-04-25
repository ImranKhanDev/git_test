import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";


const Functional = () => {
  const [message, setMessage] = useState("");
  const changeMessage = () => {
    setMessage(alert("message is changed"));
  };
  return (
    <div>
      <div className="input">
        <input type="text" className="search" placeholder="enter your search key" />
        <button className="btn"><BsSearch/></button>
      </div>
     <h1>this is homepage</h1>
    </div>
  );
};

export default Functional;
