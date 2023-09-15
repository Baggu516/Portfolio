import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/NavBarComponents/Contact';
import Home from './components/NavBarComponents/Home';
import NavBar from './components/NavBarComponents/NavBar';
import Projects from './components/NavBarComponents/Projects';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      {/* <Route path="/" element={<NavBar />}> */}
          <Route index element={<Home/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
