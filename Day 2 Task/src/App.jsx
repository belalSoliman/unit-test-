import React, { useState } from "react";
import TextInput from "./components/TextInput/TextInput";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <TextInput
        value={text}
        onChange={handleChange}
        placeholder="Enter Text"
      />
      <p>You Entered: {text}</p>
    </div>
  );
}
