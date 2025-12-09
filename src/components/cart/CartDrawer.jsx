import { useMemo } from "react";
import { useCart } from "../../context/CartContext"; // adjust path if needed
import searchIcon from "/icons/search.png"; // if you want the same icons

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart, incrementItem, decrementItem } =
    useCart();

  // simple totals
  const { subtotal, itemCount } = useMemo(() => {
    let subtotal = 0;
    let count = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * (item.quantity || 1);
      count += item.quantity || 1;
    });
    return { subtotal, itemCount: count };
  }, [cartItems]);

  // free shipping progress (example threshold)
  const FREE_SHIPPING_THRESHOLD = 100;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress =
    FREE_SHIPPING_THRESHOLD === 0
      ? 0
      : Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* right drawer */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-[80%] max-w-md flex-col bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Your cart"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">Your cart</p>
            {itemCount > 0 && (
              <p className="text-xs text-gray-500">
                {itemCount} item{itemCount > 1 ? "s" : ""} in your cart
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        </div>

        {/* FREE SHIPPING PROGRESS */}
        <div className="border-b border-gray-100 px-4 py-3 text-xs text-gray-700">
          {subtotal >= FREE_SHIPPING_THRESHOLD ? (
            <p>
              🎉 You’ve unlocked{" "}
              <span className="font-semibold">FREE SHIPPING</span>!
            </p>
          ) : (
            <p>
              Almost there, add{" "}
              <span className="font-semibold text-red-500">
                ${remaining.toFixed(2)}
              </span>{" "}
              more to get <span className="font-semibold">FREE SHIPPING</span>!
            </p>
          )}

          {/* progress bar */}
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-red-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">
              Your cart is empty. Start adding something nice ✨
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border border-gray-100 rounded-xl p-3"
              >
                {/* image */}
                <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* info + controls */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {item.name}
                    </p>
                    {/* placeholder variant text – change when you have real sizes/colors */}
                    <p className="mt-1 text-xs text-gray-500">
                      {item.color || "Multi"} / {item.size || "One size"}
                    </p>

                    {/* price row */}
                    <div className="mt-1 flex items-baseline gap-2 text-sm">
                      {item.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="font-semibold text-red-500">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    {/* quantity controls */}
                    <div className="flex items-center gap-2 rounded-full border border-gray-300 px-2 py-1 text-sm">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.id)}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="min-w-[1.5rem] text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => incrementItem(item.id)}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* remove */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Customers also bought – simple static block for now */}
          {cartItems.length > 0 && (
            <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-3">
              <p className="mb-2 text-sm font-semibold text-gray-900">
                Customers also bought
              </p>
              <div className="flex gap-3 text-sm">
                <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                  <img
                    src="/images/image-2.jpg"
                    alt="Suggested product"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-900">
                    Long Sleeve Tie Front Top
                  </p>
                  <p className="text-xs text-gray-600">$22.00</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER – subtotal + buttons */}
        <div className="border-t border-gray-200 px-4 py-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-900">Subtotal</span>
            <span className="font-semibold text-gray-900">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <p className="text-[11px] text-gray-500">
            Taxes and shipping calculated at checkout.
          </p>

          <button
            type="button"
            className="mt-1 w-full rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-sky-600"
          >
            View cart
          </button>
          <button
            type="button"
            className="w-full rounded-full bg-black px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-gray-900"
          >
            Check out
          </button>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
