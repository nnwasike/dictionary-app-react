import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio.length) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          title="click me!"
        >
          {" "}
          🔈
        </a>{" "}
        {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text} </div>;
  }
}
