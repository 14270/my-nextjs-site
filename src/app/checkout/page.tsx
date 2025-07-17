"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const isFormValid = () => {
    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "mobile",
      "address",
      "city",
      "state",
      "pinCode",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]?.trim()) {
        return false;
      }
    }
    return true;
  };

  const handlePayment = () => {
    if (!isFormValid()) {
      alert("Please complete all required checkout fields.");
      return;
    }

    const options = {
      key: "rzp_test_oLKpSPVlLpvnxG",
      amount: 99800, // ₹998.00 in paise
      currency: "INR",
      name: "ReNote.AI",
      description: "ECO Single-Use Notebook",
      image: "/logo.png",
      handler: function (response: any) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`,
        );
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: "#10B981",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 py-24 text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left Side - Form */}
        <div className="space-y-6 lg:col-span-2">
          {/* Updated header text for better visibility */}
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
            Check out
          </h1>

          {/* Email */}
          <div className="bg-opacity-90 rounded-lg bg-gray-800 p-6 shadow-lg backdrop-blur-sm">
            <h2 className="mb-4 text-lg font-semibold text-green-400">Email</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-opacity-70 mb-3 w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked
                className="accent-green-500"
              />
              <label className="text-gray-300">
                Email me with email and offers
              </label>
              <span className="ml-auto cursor-pointer font-semibold text-green-500 hover:underline">
                Login
              </span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-opacity-90 rounded-lg bg-gray-800 p-6 shadow-lg backdrop-blur-sm">
            <h2 className="mb-4 text-lg font-semibold text-green-400">
              Delivery
            </h2>
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Enter your first name"
                className="bg-opacity-70 rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <input
                type="text"
                placeholder="Enter your last name"
                className="bg-opacity-70 rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="bg-opacity-70 mb-4 w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
              value={formData.mobile}
              onChange={(e) => handleInputChange(e, "mobile")}
            />
            <input
              type="text"
              placeholder="Enter your address"
              className="bg-opacity-70 mb-4 w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
              value={formData.address}
              onChange={(e) => handleInputChange(e, "address")}
            />
            <input
              type="text"
              placeholder="Enter your apartment, suite, etc."
              className="bg-opacity-70 mb-4 w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
              value={formData.apartment}
              onChange={(e) => handleInputChange(e, "apartment")}
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <input
                type="text"
                placeholder="Enter your city"
                className="bg-opacity-70 rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
                value={formData.city}
                onChange={(e) => handleInputChange(e, "city")}
              />
              <input
                type="text"
                placeholder="Enter your state"
                className="bg-opacity-70 rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
                value={formData.state}
                onChange={(e) => handleInputChange(e, "state")}
              />
              <input
                type="text"
                placeholder="Enter your pin code"
                className="bg-opacity-70 rounded border border-gray-700 bg-gray-900 px-4 py-2 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none"
                value={formData.pinCode}
                onChange={(e) => handleInputChange(e, "pinCode")}
              />
            </div>
          </div>

          {/* Shipping Option */}
          <div className="bg-opacity-90 rounded-lg border border-green-700 bg-green-900 p-6 shadow-lg backdrop-blur-sm">
            <h2 className="mb-4 text-lg font-semibold text-green-400">
              Shipping
            </h2>
            <div className="flex items-center rounded border border-green-700 bg-green-900 p-4">
              <input
                type="radio"
                name="shipping"
                defaultChecked
                className="mr-3 accent-green-500"
              />
              <div>
                <p className="font-semibold text-green-400">Express</p>
                <p className="text-sm text-green-300">Delivery within 5 days</p>
              </div>
              <div className="ml-auto font-semibold text-green-500">
                <span className="mr-2 text-green-700 line-through">₹60.00</span>
                Free
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-opacity-90 h-fit rounded-lg bg-gray-800 p-6 shadow-lg backdrop-blur-sm">
          <h2 className="mb-6 text-xl font-semibold text-green-400">
            Order summary
          </h2>
          <div className="mb-4 flex items-center">
            <Image
              src="/images/blog/eco.png"
              alt="ECO Notebook"
              width={60}
              height={60}
              className="mr-4 rounded object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-white">
                ECO Single-Use Notebook
              </p>
              <p className="text-sm text-green-300">Quantity × 2</p>
            </div>
            <div className="font-bold text-white">₹998.00</div>
          </div>
          <div className="mb-2 flex justify-between text-gray-300">
            <span>Cart total (1 items)</span>
            <span>₹998.00</span>
          </div>
          <div className="mb-2 flex justify-between text-gray-300">
            <span>Shipping</span>
            <span>
              <span className="mr-2 text-green-700 line-through">₹60.00</span>
              <span className="text-green-500">Free</span>
            </span>
          </div>
          <hr className="my-4 border-gray-700" />
          <div className="mb-6 flex justify-between text-lg font-bold text-white">
            <span>Total</span>
            <span>₹998.00</span>
          </div>
          <button
            className="w-full rounded bg-green-600 py-3 font-semibold text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            onClick={handlePayment}
          >
            Proceed to pay →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
