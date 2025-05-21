import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, seetKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => seetKeyword(event.target.value);
  // console.log("I run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    // console.log("call the api...");
    console.log("i run only once");
  }, []);
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 3) {
    //   console.log("search for", keyword);
    // }
    console.log("i run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
