// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Tasarim from "./pages/Tasarim";
import Hikayemiz from "./pages/Hikayemiz";
import Koleksiyon from "./pages/Koleksiyon";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Anasayfa */}
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact></Contact>} />
        <Route path="/hikayemiz" element={<Hikayemiz></Hikayemiz>} />
        <Route path="/tasarim" element={<Tasarim></Tasarim>} />
        <Route path="/koleksiyon" element={<Koleksiyon></Koleksiyon>} />

        {/* Örnek diğer sayfa – sonra yaparız
        <Route path="/biz-kimiz" element={<About />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
