import React, { useState } from "react";
import Button from "./Button";

interface listprop {
  id: number;
  name: string;
  image: string;
  balance: number;
}

function FormSplitBill({ selectedFrnd }: { selectedFrnd: listprop }) {
  const [bill, setBill] = useState<number>(0);
  const [userMoney, setUserMoney] = useState<number>(0);
  const [whoIsPaying, setwhoIsPaying] = useState("user");

  //console.log(bill, userMoney, select);

  const frndExp = bill ? bill - userMoney : "";

  return (
    <form className="form-split-bill">
      <h2>split a bill with {selectedFrnd.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🫵Your Expense</label>
      <input
        type="text"
        value={userMoney}
        onChange={(e) =>
          setUserMoney(
            Number(e.target.value) > bill ? userMoney : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑{selectedFrnd.name}'s Expense</label>
      <input type="text" disabled value={frndExp} />

      <label>🤑Who is paying the Bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setwhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="frnd">{selectedFrnd.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
