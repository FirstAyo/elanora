// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context object
const CartContext = createContext(null);

// 2️⃣ Provider component that wraps your app
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to cart (or increase quantity if it’s already there)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Optional helpers for later
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  // Total items in cart (for the badge)
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3️⃣ Convenient hook so you can do: const { addToCart, cartCount } = useCart()
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
