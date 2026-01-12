// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Hikayemiz from "./pages/Hikayemiz";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Anasayfa */}
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact></Contact>} />
        <Route path="/hikayemiz" element={<Hikayemiz></Hikayemiz>} />

        {/* Örnek diğer sayfa – sonra yaparız
        <Route path="/biz-kimiz" element={<About />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
