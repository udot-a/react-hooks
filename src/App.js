import React, {useEffect, useState} from 'react';
import './App.css';

function useLogger(value) {
  useEffect(() => {
    console.log("Value change: ", value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = ({target: { value }}) => {
    setValue(value);
  }

  const clear = () => setValue("");

  return {
    bind: {
      value,
      onChange
    },
    value,
    clear
  }

}

function App() {
  const input = useInput("");

  useLogger(input.value);
  return (
      <div className={"container"}>
        <input type="text" {...input.bind}/>
        <button className={"btn btn-warning"} onClick={() => input.clear()}>{"Clear"}</button>

        <h3>{input.value}</h3>
      </div>
  );
}

export default App;
