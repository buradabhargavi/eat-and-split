import React from "react";
import Friend from "./Friend";
interface listprop {
  id: number;
  name: string;
  image: string;
  balance: number;
}
function FrndsList({
  list,
  onSelect,
  selectedFrnd,
}: {
  list: listprop[];
  onSelect: (frnd: listprop) => void;
  selectedFrnd: listprop | null;
}) {
  console.log(list);
  return (
    <ul>
      {list.map((frnd: listprop) => {
        return (
          <Friend
            details={frnd}
            key={frnd.id}
            onSelect={onSelect}
            selectedFrnd={selectedFrnd}
          ></Friend>
        );
      })}
    </ul>
  );
}

export default FrndsList;
