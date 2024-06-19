import React, { useState } from "react";
import FrndsList from "./Components/FrndsList";
import "./index.css";
import Addfrnd from "./Components/Addfrnd";
import FormSplitBill from "./Components/FormSplitBill";
import Button from "./Components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
interface listprop {
  id: number;
  name: string;
  image: string;
  balance: number;
}

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFrnd, setShowAddFrnd] = useState(false);

  const handleAdd = (newFrnd: listprop) => {
    setFriends((friends) => [...friends, newFrnd]);
    setShowAddFrnd(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FrndsList list={friends} />
        {showAddFrnd && <Addfrnd handleAdd={handleAdd}></Addfrnd>}
        <Button
          onClick={() => {
            setShowAddFrnd((prev) => !prev);
          }}
        >
          {showAddFrnd ? "close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
