import React from "react";
import { Link } from "react-router-dom";

// Example icons – update paths to match your project
import shopIcon from "/icons/apps.svg";
import wishlistIcon from "/icons/heart.png";
import cartIcon from "/icons/shopping-cart.png";
import accountIcon from "/icons/user.png";
import searchIcon from "/icons/search.png";

function BottomNav({ wishlistCount = 0, cartCount = 0 }) {
  const navItems = [
    { label: "Shop", path: "/shop", icon: shopIcon, badge: null },
    { label: "Wishlist", path: "/wishlist", icon: wishlistIcon, badge: wishlistCount },
    { label: "Cart", path: "/cart", icon: cartIcon, badge: cartCount },
    { label: "Account", path: "/account", icon: accountIcon, badge: null },
    { label: "Search", path: "/search", icon: searchIcon, badge: null },
  ];

  return (
    // fixed bottom bar, only on mobile
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white lg:hidden">
      <div className="max-w-5xl mx-auto flex justify-between">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-1 text-[11px] text-gray-700"
          >
            <div className="relative flex items-center justify-center">
              <img src={item.icon} alt={item.label} className="w-5 h-5" />

              {/* badge bubble */}
              {typeof item.badge === "number" && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 rounded-full bg-black text-[10px] text-white flex items-center justify-center">
                  {item.badge}
                </span>
              )}

              {/* if you want the 0 to always show, remove the `> 0` check above
                  and use `item.badge !== null` instead */}
            </div>

            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
