import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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

import CartDrawer from "./components/cart/CartDrawer";
import SearchDrawer from "./components/layout/topnav/SearchDrawer";

/**
 * App
 *
 * - Owns global drawer state:
 *    - isSearchOpen
 *    - isCartOpen
 * - Passes open handlers to Navbar + BottomNav so they can trigger drawers.
 * - Renders SearchDrawer + CartDrawer once, at the root.
 */
function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Lock scroll when ANY drawer is open
  useEffect(() => {
    const shouldLock = isSearchOpen || isCartOpen;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen, isCartOpen]);

  return (
    <BrowserRouter>
      {/* Top nav – uses same handlers as BottomNav */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

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

      {/* Bottom mobile nav – also opens drawers via props */}
      <BottomNav
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Shared drawers (desktop + mobile) */}
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </BrowserRouter>
  );
}

export default App;
