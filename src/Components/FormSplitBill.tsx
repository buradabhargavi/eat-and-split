import React from "react";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>
      <label>💰Bill Value</label>
      <input type="text" />

      <label>🫵Your Expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑X's Expense</label>
      <input type="text" disabled />

      <label>🤑Who is paying the Bill</label>
      <select>
        <option value="user">you</option>
        <option value="frnd">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
