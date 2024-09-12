import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import  About from './pages/about';
import  Contact from './pages/contact';
import Facility from './pages/facility';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
