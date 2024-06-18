import React from "react";

function Button(props: any) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
