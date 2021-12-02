import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  function setEntry(emojiInfo) {
    return (
      <Entry
          key={emojiInfo.id}
          emojiImage={emojiInfo.emoji}
          emojiName={emojiInfo.name}
          emojiMeaning={emojiInfo.meaning}
        />
    );
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(setEntry)}
      </dl>
    </div>
  );
}

export default App;
