import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import menuIcon from "/icons/menu.svg";
import cartIcon from "/icons/shopping-cart.png";
import searchIcon from "/icons/search.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // controls mobile drawer

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

  // 🔒 Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Container>
        <header>
          {/* desktop menu */}
          <section className="hidden lg:flex justify-between items-center py-4 px-4 lg:px-6 bg-white border-b border-gray-300">
            <Link to="/" className="text-3xl font-bold">
              Élanora
            </Link>

            <nav className="text-lg">
              <ul className="flex justify-center items-center gap-6">
                {navMenus.map((menu, index) => (
                  <li
                    key={index}
                    className="font-semibold transition duration-500 hover:text-blue-500"
                  >
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
          </section>

          {/* mobile menu */}
          <section className="lg:hidden">
            {/* top mobile bar */}
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200 bg-white">
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)} // open drawer
              >
                <img src={menuIcon} alt="menu icon" className="w-6 h-6" />
              </button>

              <Link to="/" className="text-3xl font-bold">
                Élanora
              </Link>

              <div className="flex items-center gap-4">
                <Link to="#">
                  <img src={searchIcon} alt="search icon" className="w-6 h-6" />
                </Link>
                <Link to="#">
                  <img src={cartIcon} alt="cart icon" className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* slide-in drawer + overlay */}
            <div
              className={`
                fixed inset-0 z-40
                transform transition-transform duration-300 ease-in-out
                ${
                  isMenuOpen
                    ? "translate-x-0 pointer-events-auto"
                    : "-translate-x-full pointer-events-none"
                }
              `}
            >
              {/* dark background overlay */}
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsMenuOpen(false)} // close when clicking outside
              />

              {/* side drawer */}
              <nav className="relative h-full w-[80%] md:w-[40%] bg-white border-r border-gray-300 flex flex-col">
                {/* header row with static "Menu" */}
                <div className="flex items-center justify-between border-b border-gray-300">
                  <h3 className="flex-1 text-center py-3 bg-gray-300 border-b-2 border-blue-300">
                    Menu
                  </h3>
                  <button
                    type="button"
                    className="px-4 text-2xl leading-none"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    &times;
                  </button>
                </div>

                {/* scrollable content area */}
                <div className="flex-1 overflow-y-auto">
                  <ul className="flex flex-col">
                    {navMenus.map((menu, i) => (
                      <Link
                        key={i}
                        to={menu.path}
                        className="border-b border-gray-200 py-4 px-4"
                        onClick={() => setIsMenuOpen(false)} // close after navigation
                      >
                        <li>{menu.name}</li>
                      </Link>
                    ))}

                    {limit.map((icon, i) => (
                      <Link
                        key={i}
                        to="/"
                        className="flex items-center gap-3 border-b border-gray-200 py-4 px-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <img
                          src={icon.icon}
                          alt={icon.name}
                          className="w-5 h-5"
                        />
                        <li>{icon.name}</li>
                      </Link>
                    ))}
                  </ul>

                  {/* help section */}
                  <div className="px-4 py-5 border-t border-gray-200">
                    <p className="mb-2">Need help?</p>
                    <div>
                      <p>
                        Email:{" "}
                        <span className="font-bold">info@company.com</span>
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="font-bold">{`(666) 267 2281`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
