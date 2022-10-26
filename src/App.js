import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Homepage/Home";
import Donate from "./Pages/Donate/Donate";
import Events from "./Pages/Events/Events";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Shared/Footer/Footer";
import Register from "./Pages/Register and Login/Register";
import AboutMe from "./Pages/About Me/AboutMe";
import Login from "./Pages/Register and Login/Login";

function App() {
  return (
    <div className="font-mont">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
