import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <strong>Synonyms:</strong>
        <ul>
          {" "}
          {props.examples.map(function (example, index) {
            return <li key={index}>{example}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
