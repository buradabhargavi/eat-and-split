import React from "react";
import Friend from "./Friend";
interface listprop {
  id: number;
  name: string;
  image: string;
  balance: number;
}
function FrndsList({ list }: { list: listprop[] }) {
  console.log(list);
  return (
    <ul>
      {list.map((frnd: listprop) => {
        return <Friend details={frnd} key={frnd.id}></Friend>;
      })}
    </ul>
  );
}

export default FrndsList;
