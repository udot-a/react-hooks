import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState(null);
  const [pos, setPos] = useState({x:0, y:0});

  const mouseMoveHandler = e => {
    const {clientX: x, clientY: y} = e;

    setPos({x,y})
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type]);

  useEffect(() => {
    console.log("Component did mount");

    window.addEventListener("mousemove", mouseMoveHandler)

    return () => {
      console.log("Component was unmounting");
      window.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, [])
  return (
    <div className={"container"}>
      <h1>Ресурс: {type}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setType("users")}
      >
        {"Users"}
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setType("todos")}
      >
        {"Todo"}
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setType("posts")}
      >
        {"Posts"}
      </button>

      <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
