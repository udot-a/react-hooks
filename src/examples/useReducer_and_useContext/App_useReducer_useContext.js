import React  from 'react';
import './App.css';
import Main from "./examples/useReducer_and_useContext/Main";
import Alert from "./examples/useReducer_and_useContext/Alert";
import {AlertContext} from "./examples/useReducer_and_useContext/AlertContext";


function App() {


  return (
    <AlertContext>
      <div className={"container"}>
        <Alert />

        <Main />
      </div>
    </AlertContext>
  );
}

export default App;
