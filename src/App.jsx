import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InputFrom from "./components/InputFrom";
import Pdf from "./components/Pdf";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={InputFrom} />
        <Route exact path="/pdf" Component={Pdf} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
