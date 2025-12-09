import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import menuIcon from "/icons/menu.svg";
import cartIcon from "/icons/shopping-cart.png";
import searchIcon from "/icons/search.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchDrawer from "./SearchDrawer";
import CartDrawer from "../../cart/CartDrawer";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile drawer
  const [isSearchOpen, setIsSearchOpen] = useState(false); // search drawer

  const [isCartOpen, setIsCartOpen] = useState(false);

  const navMenus = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const icons = [
    { name: "Search", icon: "/icons/search.png" },
    { name: "Account", icon: "/icons/user.png" },
    { name: "Wishlist", icon: "/icons/heart.png" },
    { name: "Cart", icon: "/icons/shopping-cart.png" },
  ];

  const limit = icons.slice(0, 3);

  // Lock scroll when either overlay is open
  useEffect(() => {
    const shouldLock = isMenuOpen || isSearchOpen;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <>
      <Container>
        <header>
          {/* Desktop layout */}
          <DesktopNav
            navMenus={navMenus}
            icons={icons}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenCart={() => setIsCartOpen(true)}
            // cartCount={cartCount}
          />

          {/* Mobile layout */}
          <MobileNav
            navMenus={navMenus}
            limitIcons={limit}
            isMenuOpen={isMenuOpen}
            onOpenMenu={() => setIsMenuOpen(true)}
            onCloseMenu={() => setIsMenuOpen(false)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenCart={() => setIsCartOpen(true)} // 👈 NEW
            menuIcon={menuIcon}
            searchIcon={searchIcon}
            cartIcon={cartIcon}
          />

          {/* Search drawer (shared for desktop + mobile) */}
          <SearchDrawer
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            searchIcon={searchIcon}
          />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </header>
      </Container>
    </>
  );
}

export default Navbar;
