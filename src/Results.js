import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        {" "}
        <h1>{props.results.word}</h1>
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
