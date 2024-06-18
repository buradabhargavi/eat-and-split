import React, { useState } from "react";
import Button from "./Button";

function Addfrnd() {
  const [name, setName] = useState("");
  const [url, seturl] = useState("");

  const handleSubmit = () => {
    console.log(name, url);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">🧑‍🤝‍🧑Friend Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <label htmlFor="url">🌄 Image URL</label>

      <input
        type="text"
        id="url"
        value={url}
        onChange={(e) => {
          seturl(e.target.value);
        }}
      ></input>

      <Button>Add Friend</Button>
    </form>
  );
}

export default Addfrnd;
