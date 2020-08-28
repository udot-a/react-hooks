import React, {useState, useEffect, useRef} from 'react';
import './App.css';


function App() {
  const [value, setValue] = useState("initial");
  const myRef = useRef(0);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  useEffect(() => {
    myRef.current++;
    inputRef.current.style.backgroundColor = `rgba(${150+myRef.current}, ${150+myRef.current}, ${myRef.current})`
  })
  return (
    <div className={"container"}>
      <h1>Кол-во рендеров: {myRef.current}</h1>
      <h3>Прошлое состояние: {prevValue.current}</h3>

      <input
        type="text"
        onChange={({target: {value}}) => setValue(value)}
        value={value}
        ref={inputRef}
      />

      <button
        className={"btn btn-success"}
        onClick={() => inputRef.current.focus()}
      >
        {"Get focus"}
      </button>
    </div>
  );
}

export default App;
