import React from 'react'
// import "./cool.css";
import someStyleObj from "./CoolStyle.module.css";

const CoolStyle = (props) => {
  return (
    <fieldset>
        <legend>CoolStyle.jsx</legend>
        <h1 style={{color: "red"}}>cool 😎</h1>
        <button className={someStyleObj.btn}>click</button>
        </fieldset>
  )
}

export default CoolStyle