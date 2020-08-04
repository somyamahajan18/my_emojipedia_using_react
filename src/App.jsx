import React from "react";
import Emoji from "./emoji";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createemoji =>{
           <Emoji
      emojii={create.emoji}
      namee={create.name}
      meaningg={create.meaning}
    />
    )}</dl>
    </div>
  );
}

export default App;
