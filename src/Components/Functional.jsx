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
      <h1>i love to work with GITHUBBB & git  <br /> i love to cod3 </h1>
      <h1>this is Functional components</h1>
      {/* // eslint-disable-next-line no-sequences */}
      <b>i love you when you call me Muhammad.</b>
      <button onClick={() => changeMessage()}>msg</button>
    </div>
  );
};

export default Functional;
