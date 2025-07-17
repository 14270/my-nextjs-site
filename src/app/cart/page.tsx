"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "AIR Reusable Notebook",
    price: 999,
    originalPrice: 2999,
    image: "/images/blog/note.png",
  },
  {
    id: 2,
    name: "CLASSIC Reusable Notebook",
    price: 999,
    originalPrice: 3000,
    image: "/images/blog/classic (2).png",
  },
  {
    id: 3,
    name: "ECO Reusable Notebook",
    price: 499,
    originalPrice: 999,
    image: "/images/blog/eco.png",
  },
];

const CartPage = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add product to cart or increase quantity if already present
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleQuantityChange = (itemId: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemove = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shippingCost = 60;
  const isCartEmpty = cartItems.length === 0;

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8 pt-28 text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      {/* Product list with Add to Cart buttons */}
      <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border p-6 dark:border-gray-700"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="mx-auto rounded object-cover"
            />
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-500 line-through">
              ₹{product.originalPrice}.00
            </p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              ₹{product.price}.00
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h1 className="mb-8 text-3xl font-bold">
        Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
      </h1>

      {!isCartEmpty ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side - Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center justify-between rounded-lg bg-gray-100 p-6 dark:bg-gray-800"
              >
                <div className="flex items-center gap-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Quantity
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="h-8 w-8 rounded border text-lg font-bold dark:border-gray-600"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="h-8 w-8 rounded border text-lg font-bold dark:border-gray-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 line-through">
                    ₹{item.originalPrice}.00
                  </p>
                  <p className="text-xl font-bold text-green-600">
                    ₹{item.price}.00
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-2 text-sm text-red-500 underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Order Summary */}
          <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">Order summary</h3>
            <div className="mb-2 flex justify-between">
              <span>
                Cart total ({cartItems.length}{" "}
                {cartItems.length === 1 ? "item" : "items"})
              </span>
              <span>₹{cartTotal}.00</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Shipping</span>
              <span>
                <span className="text-gray-400 line-through">
                  ₹{shippingCost}
                </span>{" "}
                <span className="text-green-600">Free</span>
              </span>
            </div>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <div className="mb-6 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{cartTotal}.00</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
            >
              Continue to checkout →
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-28 text-center">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Add some products to get started
          </p>
          <Link href="/blog">
            <button className="mt-6 rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
