import Header from './component/layouts/Header';
import Home from './component/Home';
import About from './component/About';
import Menu from './component/Menu';
import Contact from './component/Contact';
import Footer from './component/layouts/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
