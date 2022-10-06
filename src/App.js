import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Homepage/Home";
import Donate from "./Pages/Donate/Donate";
import Events from "./Pages/Events/Events";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donation" element={<Donate />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
