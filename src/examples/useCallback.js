import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import './App.css';

const ItemList = ({getItems}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("RENDER")
  }, [getItems])

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "tomato" : "black"
  }

  const generateItems =useCallback(() =>
    new Array(count).fill("").map((_, idx) => `Element #${idx+1}`), [count])

  return (
    <div className={"container"}>
      <h1 style={styles}>Вычисляемлое свойство: {count}</h1>
      <button
        className={"btn btn-success"}
        name={"inc"}
        onClick={() => setCount(prev => prev +1)}
      >
        Добавить
      </button>

      <button
        className={"btn btn-warning"}
        onClick={() => setColored(prev => !prev)}
      >
        Изменить
      </button>

      <ItemList getItems={generateItems}/>
    </div>
  );
}

export default App;
