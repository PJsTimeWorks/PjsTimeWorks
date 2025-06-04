"use client";

import Image from "next/image";
import { useCart } from "../cart-context";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  const total = items.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + priceNumber * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl mb-6">Your Cart</h1>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.length > 0 && (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.name} className="flex items-center space-x-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div className="flex-1">
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-400">
                    {item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-sm text-red-400 underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold">Total: ${total.toFixed(2)}</p>
          <button
            onClick={clearCart}
            className="mt-4 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
          >
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}
