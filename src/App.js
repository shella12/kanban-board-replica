import "./App.css";
import Navbar from "./components/Navbar";
import ToolBar from "./components/ToolBar";
import colorfilter from "./assets/colorfilter.jpg";
import iconClose from "./assets/iconClose.jpg";
import Project from "./components/Project";
import Hamburger from './components/Hamburger';
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header className="header flex row">
      <div className={`logo-container flex`}>
        <a href="/" id="logo" className="flex">
          <img src={colorfilter} alt="logo" /> Project M.
        </a>
        <img src={iconClose} id="collapse-btn" alt="collapse bar icon" />
      </div>
      <Hamburger open={open} setOpen={setOpen}/>
      <ToolBar />
      <Navbar open={open}/>
    </header>
    <main>
      <Project />
    </main>
    </>
  );
}

export default App;
