import React, {useContext, useState, useReducer} from "react";

const Context = React.createContext();

export const useAlert = () => useContext(Context)

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ALERT":
      return {
        ...state,
        alert: !state.alert,
        text: action.text
      }

    default: return state;
  }
}

export const AlertContext = ({ children }) => {
  // const [alert, setAlert] = useState(false)

  // const toggle = () => setAlert(prev => !prev);

  const [state, dispatch] = useReducer(reducer, {alert: false});

  return (
    <Context.Provider value={{dispatch, state}}>
      { children }
    </Context.Provider>
 )
}


