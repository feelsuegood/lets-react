import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // Get basename from package.json homepage or default to "/"
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
