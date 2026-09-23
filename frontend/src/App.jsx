import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Catalogue from "./pages/Catalogue";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowToOrder from "./pages/HowToOrder";
import Repairs from "./pages/Repairs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/design/:reference" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-to-order" element={<HowToOrder />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
