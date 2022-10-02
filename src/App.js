import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Homepage/Home";
import Donate from "./Pages/Donate/Donate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
