import React from "react";
import Button from "./Button";

interface frndprops {
  id: number;
  name: string;
  image: string;
  balance: number;
}
function Friend({ details }: { details: frndprops }) {
  const isSelected = true;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={details.image} alt="user"></img>
      <h3>{details.name}</h3>
      <p className="red">you owes {details.name}</p>
      <Button> {isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}

export default Friend;
