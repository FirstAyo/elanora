import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import menuIcon from "/icons/menu.svg";
import cartIcon from "/icons/shopping-cart.png";
import searchIcon from "/icons/search.png";

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
    { name: "Search", icon: "/icons/search.png" },
    { name: "User", icon: "/icons/user.png" },
    { name: "Wishlist", icon: "/icons/heart.png" },
    { name: "Cart", icon: "/icons/shopping-cart.png" },
  ];

  const limit = icons.slice(0, 3);

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
            <div className="flex justify-between items-center py-3 px-4">
              <button>
                <img src={menuIcon} alt="menu icon" className="w-6 h-6" />
              </button>
              <Link to="/" className="text-3xl font-bold">
                Élanora
              </Link>
              <div className="flex items-center gap-4">
                <Link>
                  <img src={searchIcon} alt="search icon" className="w-6 h-6" />
                </Link>
                <Link>
                  <img src={cartIcon} alt="search icon" className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <nav className="w-[80%] border-r border-gray-300">
              <h3 className="text-center py-2 bg-gray-300 border-b-2 border-blue-300">
                Menu
              </h3>

              <div className="">
                <ul className="flex flex-col">
                  {navMenus.map((menu, i) => (
                    <Link
                      key={i}
                      to={menu.path}
                      className="border-b border-gray-200 py-3 px-4"
                    >
                      <li>{menu.name}</li>
                    </Link>
                  ))}

                  {limit.map((icon, i) => (
                    <Link
                      key={i}
                      to="/"
                      className="flex items-center gap-3 border-b border-gray-200 py-3 px-4"
                    >
                      <img
                        src={icon.icon}
                        alt={icon.name}
                        className="w-6 h-6"
                      />
                      <li>{icon.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </nav>
          </section>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
