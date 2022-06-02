import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onchange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev +1);
  useEffect(() =>{
    console.log('i run click event');
  },[counter])
  
  const iRunonlyOne = () =>{
    console.log('i run only one');
  };
  useEffect(() =>{
    if(keyword !== "" && keyword.length >3){console.log("search keyword =>" + keyword);
}},[keyword])
useEffect(() =>{
  console.log("keyword event" );
},[keyword])
  useEffect(iRunonlyOne,{});

  return (
    <div>
      <h1 className ={styles.title}> Start React.js now!</h1>
      <input type="text" onChange={onchange} value={keyword} placeholder="search here..?"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
