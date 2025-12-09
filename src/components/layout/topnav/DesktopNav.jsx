import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

function DesktopNav({ navMenus, icons, onOpenSearch, onOpenCart }) {
  const { cartCount } = useCart(); // read cart count from context

  return (
    <>
      {/* desktop menu */}
      <section className="hidden lg:block bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="flex items-center justify-between py-3 px-4 lg:px-6">
          {/* Left: logo / brand */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900"
            aria-label="Élanora homepage"
          >
            <span>Élanora</span>
            <span className="hidden rounded-full border border-gray-200 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500 sm:inline">
              Studio
            </span>
          </Link>

          {/* Center: primary navigation */}
          <nav
            className="text-sm lg:text-[15px] font-medium"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center gap-6 xl:gap-8">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={menu.path}
                    className="
                      relative pb-1 text-gray-700 transition-colors
                      hover:text-gray-900
                      after:absolute after:inset-x-0 after:-bottom-[2px]
                      after:h-[2px] after:origin-center after:scale-x-0
                      after:bg-gray-900 after:transition-transform after:duration-200
                      hover:after:scale-x-100
                    "
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: icon actions */}
          <ul className="flex items-center gap-3 xl:gap-4">
            {icons.map((icon) => {
              const isCart = icon.name === "Cart";
              const isSearch = icon.name === "Search";

              const handleClick = () => {
                if (isCart && onOpenCart) {
                  onOpenCart(); // 👉 let Navbar open CartDrawer
                } else if (isSearch && onOpenSearch) {
                  onOpenSearch(); // 👉 let Navbar open Search drawer
                }
              };

              return (
                <li key={icon.name} className="relative">
                  <button
                    type="button"
                    aria-label={icon.name}
                    onClick={handleClick}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-gray-900 hover:text-gray-900"
                  >
                    <img src={icon.icon} alt="" className="h-4 w-4" />
                  </button>

                  {/* Cart badge */}
                  {isCart && cartCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
                      {cartCount}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default DesktopNav;
