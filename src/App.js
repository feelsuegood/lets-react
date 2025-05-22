import React from "react";
//* in 2019, HashRouter used because it's easy to deploy to github page
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Navigation />
        {/* render both Home and About so put exact! */}
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/movie-detail" component={Detail} /> */}
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
      {/* </BrowserRouter> */}
      <footer style={{ textAlign: "center", margin: 30 }}>
        &copy;feelsuegood
      </footer>
    </>
  );
}

export default App;
