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
      <h1>this is Functional components</h1>
      {/* // eslint-disable-next-line no-sequences */}
      <button onClick={() => changeMessage()}>msg</button>
    </div>
  );
};

export default Functional;
