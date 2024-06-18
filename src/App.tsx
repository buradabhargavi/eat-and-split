import React from "react";
import FrndsList from "./Components/FrndsList";
import "./index.css";
import Addfrnd from "./Components/Addfrnd";
import FormSplitBill from "./Components/FormSplitBill";
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

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FrndsList list={initialFriends} />
        <Addfrnd></Addfrnd>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
