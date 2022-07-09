import React from "react";
import "./DictionaryPhonetic.css";

export default function DictionaryPhonetic(props) {
  return (
    <div className="DictionaryPhonetic">
      <div className="row">
        <a
          className="btnfos btnfos-2"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer noopener"
        >
          Listen:
        </a>
        {props.phonetic.text}
      </div>
    </div>
  );
}
