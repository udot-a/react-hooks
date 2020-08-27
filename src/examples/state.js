import React, {useState} from 'react';
import './App.css';

const computeInit = () => Math.trunc(Math.random() * 20);

function App() {
  const [counter, setCounter] = useState(() => computeInit());

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now()
  });

  const clickHandler = ({target: {name}}) => {
    setCounter(prev => name === "inc" ? prev + 1 : name === "dec" ? prev -1 : prev);
  }

  const takeObj = () => {
    setState(prevState => {
      return {...prevState, title: "sasadasdsadasda" }
    })
  }
  return (
    <div className={"container"}>
      <h1>Счетчик</h1>

      <h4>{counter}</h4>

      <button
        className={"btn btn-success"}
        name={"inc"}
        onClick={clickHandler}
      >
        Добавить
      </button>

      <button
        className={"btn btn-danger"}
        name={"dec"}
        onClick={clickHandler}
      >
        Убрать
      </button>

      <button
        className={"btn btn-default"}
        onClick={() => setState(prevState => {
          return {
            ...prevState, title: "What a fack"
          }})}
      >
        Убрать
      </button>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default App;
