import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        {" "}
        <h2 className="text-capitalize">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
