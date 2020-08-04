import React from "react";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojii}
        </span>
        <span>{props.namee}</span>
      </dt>
      <dd>{props.meaningg}</dd>
    </div>
  );
}
export default Emoji;
