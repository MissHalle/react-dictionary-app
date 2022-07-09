import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";
import DictionaryPhonetic from "./DictionaryPhonetic";
import "./DictionaryResults.css";

export default function DictionaryResults(props) {
  if (props.results) {
    return (
      <div className="DictionaryResults">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <DictionaryPhonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <DictionaryMeaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
