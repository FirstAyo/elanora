import React, { useState, useEffect } from "react";
import Container from "../../ui/Container";
import menuIcon from "/icons/menu.svg";
import cartIcon from "/icons/shopping-cart.png";
import searchIcon from "/icons/search.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

/**
 * Navbar
 *
 * - DesktopNav + MobileNav share the same navMenus / icons.
 * - Mobile menu (hamburger) state is local to this component.
 * - Search + Cart drawers are controlled by parent (App) via props:
 *    - onOpenSearch()
 *    - onOpenCart()
 */
function Navbar({ onOpenSearch, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu only

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

  // Lock scroll only when the MOBILE MENU (hamburger) is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <Container>
        {/* Desktop layout */}
        <DesktopNav
          navMenus={navMenus}
          icons={icons}
          onOpenSearch={onOpenSearch}
          onOpenCart={onOpenCart}
        />

        {/* Mobile layout */}
        <MobileNav
          navMenus={navMenus}
          limitIcons={limit}
          isMenuOpen={isMenuOpen}
          onOpenMenu={() => setIsMenuOpen(true)}
          onCloseMenu={() => setIsMenuOpen(false)}
          onOpenSearch={onOpenSearch}
          onOpenCart={onOpenCart}
          menuIcon={menuIcon}
          searchIcon={searchIcon}
          cartIcon={cartIcon}
        />
      </Container>
    </header>
  );
}

export default Navbar;
