import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // adjust path if needed

import shopIcon from "/icons/apps.svg";
import wishlistIcon from "/icons/heart.png";
import cartIcon from "/icons/shopping-cart.png";
import accountIcon from "/icons/user.png";
import searchIcon from "/icons/search.png";

function BottomNav({ onOpenCart, onOpenSearch }) {
  const { cartCount } = useCart();
  const wishlistCount = 0; // placeholder for future wishlist feature

  // Simple "slide-up" animation on mount
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(id);
  }, []);

  // Define items: some navigate, some trigger actions
  const navItems = [
    { label: "Shop", type: "link", path: "/shop", icon: shopIcon, badge: null },
    {
      label: "Wishlist",
      type: "link",
      path: "/wishlist",
      icon: wishlistIcon,
      badge: wishlistCount,
    },
    {
      label: "Cart",
      type: "action", // 🔔 triggers CartDrawer
      onClick: onOpenCart,
      icon: cartIcon,
      badge: cartCount,
    },
    {
      label: "Account",
      type: "link",
      path: "/account",
      icon: accountIcon,
      badge: null,
    },
    {
      label: "Search",
      type: "action", // 🔍 triggers SearchDrawer
      onClick: onOpenSearch,
      icon: searchIcon,
      badge: null,
    },
  ];

  return (
    <nav
      className={`
        fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white lg:hidden
        transform transition-transform duration-300 ease-out
        ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="mx-auto flex max-w-5xl justify-between">
        {navItems.map((item) => {
          const content = (
            <>
              <div className="relative flex items-center justify-center">
                <img src={item.icon} alt={item.label} className="h-5 w-5" />

                {/* badge bubble (cart / wishlist) */}
                {typeof item.badge === "number" && item.badge > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-black px-[3px] text-[10px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className="font-medium">{item.label}</span>
            </>
          );

          // Action items (Cart, Search) use <button>
          if (item.type === "action") {
            return (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] text-gray-700"
              >
                {content}
              </button>
            );
          }

          // Normal navigation items use <Link>
          return (
            <Link
              key={item.label}
              to={item.path}
              className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] text-gray-700"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
