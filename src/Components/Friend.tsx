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
      {details.balance < 0 && (
        <p className="red">
          you owe {details.name} ${Math.abs(details.balance)}
        </p>
      )}
      {details.balance === 0 && <p>you and {details.name} are even</p>}

      {details.balance > 0 && (
        <p className="green">
          you {details.name} owes you ${Math.abs(details.balance)}
        </p>
      )}
      <Button> Select</Button>
    </li>
  );
}

export default Friend;
