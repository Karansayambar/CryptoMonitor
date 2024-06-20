import React from "react";
import "./style.css";

const Button = ({ text, outlined, onclick}) => {
  return <div className={outlined ? "btn-outlined" : "btn"} onClick={() => onclick()}>
      {text}
    </div>
};

export default Button;
