import React, {useContext} from "react";
import {AlertContext} from "../../App";
import {useAlert} from "./AlertContext";

export default () => {
  const {state:{alert, text}} = useAlert();

  if (!alert) {
    return null;
  }

  return (
    <div className={"alert alert-danger mt-3"}>
      {text}
    </div>
  )
}
