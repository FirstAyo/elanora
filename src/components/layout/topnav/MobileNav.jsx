import { Link } from "react-router-dom";

function MobileNav({
  navMenus,
  limitIcons,
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
  onOpenSearch,
  menuIcon,
  searchIcon,
  cartIcon,
}) {
  return (
    <>
      {/* mobile menu */}
      <section className="lg:hidden">
        {/* Top mobile bar */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur">
          {/* Hamburger / menu toggle */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:border-gray-900"
          >
            <img src={menuIcon} alt="" className="h-4 w-4" />
          </button>

          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
            aria-label="Élanora homepage"
          >
            Élanora
          </Link>

          {/* Right-side icons */}
          <div className="flex items-center gap-2">
            <button
              to="#"
              aria-label="Search"
              onClick={onOpenSearch}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:border-gray-900"
            >
              <img src={searchIcon} alt="" className="h-4 w-4" />
            </button>
            <Link
              to="#"
              aria-label="Cart"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm hover:border-gray-900"
            >
              <img src={cartIcon} alt="" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Overlay + slide-in drawer */}
        <div
          className={`fixed inset-0 z-40 lg:hidden ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Dark overlay */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={onCloseMenu}
            aria-hidden="true"
          />

          {/* Side drawer */}
          <nav
            aria-label="Mobile navigation"
            className={`absolute left-0 top-0 flex h-full w-[78%] max-w-xs flex-col border-r border-gray-200 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                Menu
              </p>
              <button
                type="button"
                onClick={onCloseMenu}
                aria-label="Close navigation menu"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto">
              {/* Primary nav links */}
              <ul className="flex flex-col">
                {navMenus.map((menu, i) => (
                  <li key={i}>
                    <Link
                      to={menu.path}
                      className="block border-b border-gray-100 px-4 py-3.5 text-sm text-gray-800 transition-colors hover:bg-gray-50"
                      onClick={onCloseMenu}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}

                {/* Secondary icon actions (limit array) */}
                {limitIcons.map((icon, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="flex items-center gap-3 border-b border-gray-100 px-4 py-3.5 text-sm text-gray-800 transition-colors hover:bg-gray-50"
                      onClick={onCloseMenu}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white">
                        <img src={icon.icon} alt="" className="h-4 w-4" />
                      </span>
                      <span>{icon.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Help section */}
              <div className="border-t border-gray-100 px-4 py-5 text-sm text-gray-700">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Need help?
                </p>
                <p>
                  Email:{" "}
                  <span className="font-semibold text-gray-900">
                    info@company.com
                  </span>
                </p>
                <p className="mt-1">
                  Phone:{" "}
                  <span className="font-semibold text-gray-900">
                    (666) 267 2281
                  </span>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default MobileNav;
