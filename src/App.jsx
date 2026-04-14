import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import ArtworkDetail from "./pages/ArtworkDetail";


function App() {
  return (
    <div className="max-w-[1280px] min-h-screen flex">
      <aside className="w-[295px] p-10">
        <Navbar />
      </aside>

      <main className="w-[985px] pr-8 pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

