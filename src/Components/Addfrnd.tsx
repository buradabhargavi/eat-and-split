import React, { useState } from "react";
import Button from "./Button";

function Addfrnd({ handleAdd }: any) {
  const [name, setName] = useState("");
  const [url, seturl] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e: any) => {
    const id = crypto.randomUUID();
    if (!name || !url) return;
    e.preventDefault();
    const newFrnd = { name, image: `${url}?=${id}`, balance: 0, id };
    handleAdd(newFrnd);

    setName("");
    seturl("https://i.pravatar.cc/48");
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
