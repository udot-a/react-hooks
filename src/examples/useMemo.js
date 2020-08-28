import React, {useState, useEffect, useRef, useMemo} from 'react';
import './App.css';

const complexCompute = n => {
  let i = 0;
  while (i < 100000000) i++;

  console.log("ComplexCompute call ... ")

  return n * 2;
}

function App() {
  const [number, setNumber] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => (
    {
      color: colored ? "tomato" : "black"
    }
  ), [colored])

  const clickHandler = ({target: {name}}) => {
    setNumber(prev => name === "inc" ? prev + 1 : name === "dec" ? prev -1 : prev);
  }

  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log("Styles changed")
  }, [styles])

  return (
    <div className={"container"}>
      <h1 style={styles}>Вычисляемлое свойство: {computed}</h1>
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
        className={"btn btn-warning"}
        onClick={() => setColored(prev => !prev)}
      >
        Изменить
      </button>

    </div>
  );
}

export default App;
