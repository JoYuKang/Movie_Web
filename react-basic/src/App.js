import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const [create, setCreate] = useState(false);
  const onchange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("i run click event");
  }, [counter]);

  const iRunonlyOne = () => {
    console.log("i run only one");
  };
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("search keyword =>" + keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("keyword event");
  }, [keyword]);
  useEffect(iRunonlyOne, {});

  function Hello() {
    useEffect(() => {
      console.log("create event show!");
      return () => console.log("destory event!");
    }, []);
    return <h1> SHOW Hello </h1>;
  }

  function Hellow() {
    useEffect(() => {
      console.log("hi!");
      return () => console.log("bye!");
    }, []);
    return <h1>Hello</h1>;
  }

  const onClickShow = () => setShowing((prev) => !prev);
  const onClickCreate = () => setCreate((prev) => !prev);

  // todo
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    //console.log(toDo);
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  //console.log(toDos);
  //console.log(onChange);
  //console.log(toDo);

  return (
    <div>
      <h1 className={styles.title}> Start React.js now!</h1>
      <input
        type="text"
        onChange={onchange}
        value={keyword}
        placeholder="search here..?"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello></Hello> : null}
      <div></div>
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
      <div></div>
      {create ? <Hellow></Hellow> : null}
      <div></div>
      <button onClick={onClickCreate}>{create ? "destory" : "create"}</button>
      <h1>To do List ({toDos.length}) 개</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your to do !"
          value={toDo}
        ></input>
        <button>ADD TO DO LIST </button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo,index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 