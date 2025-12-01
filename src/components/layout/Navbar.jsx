import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

function Navbar() {
  const navMenus = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const icons = [
    { name: "Search", icon: "/public/icons/search.png" },
    { name: "User", icon: "/public/icons/user.png" },
    { name: "Favorite", icon: "/public/icons/heart.png" },
    { name: "Cart", icon: "/public/icons/shopping-cart.png" },
  ];

  return (
    <>
      <Container>
        <header className="flex justify-between items-center py-4 px-4 lg:px-6 bg-white">
          <Link to="/" className="text-3xl font-bold">
            Elanora
          </Link>
          <nav className="text-lg">
            <ul className="flex justify-center items-center gap-6">
              {navMenus.map((menu, index) => (
                <li key={index} className="hover:text-blue-300">
                  <Link to={menu.path}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex justify-center items-center gap-4">
            {icons.map((icon, index) => (
              <Link to="#" key={index} className="w-6 h-6">
                <img src={icon.icon} alt={icon.name} className="w-full" />
              </Link>
            ))}
          </ul>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
