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
  const [selectedFrnd, setSelectedFrnd] = useState<listprop | null>(null);

  const handleAdd = (newFrnd: listprop) => {
    setFriends((friends) => [...friends, newFrnd]);
    setShowAddFrnd(false);
  };
  const handleSelect = (friend: listprop) => {
    setSelectedFrnd((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFrnd(false);
    //console.log(friend);
  };
  const handleButton = () => {
    setShowAddFrnd((prev) => !prev);
    setSelectedFrnd(null);
  };

  const HandleSplit = (value: any) => {
    // console.log(value);
    setFriends((friends) =>
      friends.map((frnd) =>
        frnd.id === selectedFrnd?.id
          ? { ...frnd, balance: value + frnd.balance }
          : frnd
      )
    );
    setSelectedFrnd(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FrndsList
          list={friends}
          onSelect={handleSelect}
          selectedFrnd={selectedFrnd}
        />
        {showAddFrnd && <Addfrnd handleAdd={handleAdd}></Addfrnd>}
        <Button onClick={handleButton}>
          {showAddFrnd ? "close" : "Add Friend"}
        </Button>
      </div>

      {selectedFrnd && (
        <FormSplitBill selectedFrnd={selectedFrnd} onSplit={HandleSplit} />
      )}
    </div>
  );
}

export default App;
