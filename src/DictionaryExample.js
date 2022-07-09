import React from "react";
import "./DictionaryExample.css";

export default function DictionaryExample(props) {
  console.log(props.example);
  if (props.examples && props.examples.length > 0) {
    return (
      <div className="DictionaryExample">
        <section className="Examples">
          <strong>Example: </strong>
        </section>
        {props.examples.map(function (example, index) {
          return <span key={index}>{example}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
