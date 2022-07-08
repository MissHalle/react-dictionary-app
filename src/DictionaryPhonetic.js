import React from "react";

export default function DictionaryPhonetic(props) {
  return (
    <div className="DictionaryPhonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer noopener">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
