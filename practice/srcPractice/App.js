import { useState, useEffect } from "react";

function Hello() {
  //   useEffect(() => {
  //     console.log("created");
  //     //* clean up function
  //     return () => console.log("destroyed :(");
  //   }, []);
  //   return <h1>Hello :)</h1>;
  // }

  // function Hello() {
  //   function byeFn() {
  //     console.log("bye :(");
  //   }
  //  To use it as a cleanup function, return the function itself, like return byeFn.
  // This is the same pattern as return () => console.log("destroyed :(");
  //   function hiFn() {
  //     console.log("created");
  //      //! retrun byeFn(); -> wrong
  //     return byeFn;
  //   }
  //   useEffect(hiFn, []);
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  //   useEffect(function () {
  //     console.log("hi");
  //     return function () {
  //       console.log("bye");
  //     };
  //   }, []);
  return <h1>Hello :)</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
