import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPage from "./pages/PrivacyPage";
import Footer from "./components/layout/Footer";
import BottomNav from "./components/layout/BottomNav";
import Navbar from "./components/layout/topnav/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
      <BottomNav wishlistCount={0} cartCount={0} />
    </BrowserRouter>
  );
}

export default App;
