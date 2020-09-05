import React, {useContext} from "react";
import {useAlert} from "./AlertContext";

export default () => {
  const {dispatch} = useAlert();

  return (
    <>
      <h1>Hello with example Context</h1>

      <button
        className={"btn btn-success"}
        onClick={() => dispatch({type: "CHANGE_ALERT", text: "Hello, I am your new message!!!"})}
      >
        Show alert
      </button>
    </>
  )
}
