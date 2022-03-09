import React from "react";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  if (props.phonetic.audio.length) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}{" "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔈
        </a>
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text} </div>;
  }
}
