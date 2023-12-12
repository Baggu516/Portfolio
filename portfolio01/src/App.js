import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact-component/Contact";
import Home from "./components/Home-component/Home";
import NavBar from "./components/NavBarComponents/NavBar";
import Projects from "./components/project-component/Projects";
import About from "./components/About-component/About";
import { useState } from "react";
import Model from "./Model";
function App() {
  const [open,setOpen]=useState(true)
  const openfunc=()=>{
    setOpen(!open)
  }
  return (
    <div className="App">
      <BrowserRouter>
    {!open&&<Model openfunc={openfunc}/>}
     {open&& 
     <>
     <div>
     <NavBar openfunc={openfunc}/>
     </div>
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
        </>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
