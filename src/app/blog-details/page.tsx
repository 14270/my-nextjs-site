"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// --- IMAGE ARRAYS ---
const airImages = [
  "/images/blog/Air.png",
  "/images/blog/Air (2).png",
  "/images/blog/Air (3).png",
  "/images/blog/Air (4).png",
  "/images/blog/Air (5).png",
  "/images/blog/note.png",
];

const classicImages = [
  "/images/blog/classic.png",
  "/images/blog/classic (2).png",
  "/images/blog/classic (3).png",
  "/images/blog/classic (4).png",
  "/images/blog/classic (5).png",
  "/images/blog/Air (4).png",
];

const ecoImages = [
  "/images/blog/eco.png",
  "/images/blog/eco (2).png",
  "/images/blog/Air (2).png",
  "/images/blog/classic (4).png",
  "/images/blog/Air (4).png",
  "/images/blog/classic (5).png",
];

// --- TYPES ---
type ProductType = "air" | "classic" | "eco";

type PageLayout = {
  name: string;
  count: number;
};

type Product = {
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
  size: string;
  images: string[];
  description1: string;
  description2?: string;
  quantityNote: string;
  integrationsTitle?: string;
  integrationsList?: string[];
  integrationsDetails?: string[];
  pageLayouts?: PageLayout[];
};

// --- PRODUCT DATA ---
const products: Record<ProductType, Product> = {
  air: {
    title: "Air (AI-Powered Smart Reusable Notebook)",
    price: 999,
    originalPrice: 2999,
    discount: "67% off",
    size: '8.5" x 11" (A5)',
    images: airImages,
    description1:
      "ReNoteAI-Classic is an AI-powered smart reusable notebook with waterproof, non-tearable and eco-friendly pages — perfect for students, professionals, and creators.",
    description2:
      "Paired with the ReNoteAI app, it lets you write, scan, organize and access your notes anytime. It's a complete productivity system — all in one smart notebook.",
    quantityNote: "Add a minimum of 10 books to avail further discounts",
    integrationsTitle: "Seamlessly integrated with the ReNote AI app",
    integrationsList: [
      "Handwritten notes to digital text (OCR)",
      "Sketch to Image Generation",
      "AI Search & Summarization",
      "Auto Scan & Cloud Sync with ReNoteAI Cloud",
    ],
    integrationsDetails: [
      "Manage your daily tasks with - Apple reminder / Google tasks / Microsoft to do",
      "Schedule meetings with - Zoom / Google meet / Microsoft teams",
      "Share your MOM on - Gmail / Outlook",
    ],
    pageLayouts: [
      { name: "To-Do Templates", count: 2 },
      { name: "Schedule Meeting", count: 2 },
      { name: "MOM Templates", count: 2 },
      { name: "Ruled pages", count: 20 },
      { name: "Blank pages", count: 20 },
      { name: "Dot Grid Pages", count: 2 },
    ],
  },
  classic: {
    title: "ReNoteAI-Classic Notebook",
    price: 1199,
    originalPrice: 3499,
    discount: "66% off",
    size: '9" x 12" (A4)',
    images: classicImages,
    description1:
      "The ReNoteAI-Classic notebook offers a larger writing surface, ideal for professionals and students needing more space. Features durable pages and seamless AI integration.",
    quantityNote: "Add a minimum of 5 books for extra discount",
    integrationsTitle: "Seamlessly integrated with the ReNote AI app",
    integrationsList: [
      "Handwritten notes to digital text (OCR)",
      "Sketch to Image Generation",
      "AI Search & Summarization",
      "Auto Scan & Cloud Sync with ReNoteAI Cloud",
    ],
    integrationsDetails: [
      "Manage your daily tasks with - Apple reminder / Google tasks / Microsoft to do",
      "Schedule meetings with - Zoom / Google meet / Microsoft teams",
      "Share your MOM on - Gmail / Outlook",
    ],
    pageLayouts: [
      { name: "To-Do Templates", count: 2 },
      { name: "Schedule Meeting", count: 2 },
      { name: "MOM Templates", count: 2 },
      { name: "Ruled pages", count: 20 },
      { name: "Blank pages", count: 20 },
      { name: "Dot Grid Pages", count: 2 },
    ],
  },
  eco: {
    title: "ReNoteAI-Eco Notebook",
    price: 799,
    originalPrice: 2499,
    discount: "68% off",
    size: '8" x 10" (Compact)',
    images: ecoImages,
    description1:
      "The ReNoteAI-Eco notebook is made using 100% recycled and biodegradable materials. It supports your sustainable lifestyle while offering smart note-taking features.",
    quantityNote: "Eco-friendly materials for sustainable use",
    integrationsList: [
      "Handwritten notes to digital text (OCR)",
      "Sketch to Image Generation",
      "AI Search & Summarization",
      "Auto Scan & Cloud Sync with ReNoteAI Cloud",
    ],
    integrationsDetails: [
      "Manage your daily tasks with - Apple reminder / Google tasks / Microsoft to do",
      "Schedule meetings with - Zoom / Google meet / Microsoft teams",
      "Share your MOM on - Gmail / Outlook",
    ],
    pageLayouts: [
      { name: "To-Do Templates", count: 4 },
      { name: "Schedule Meeting", count: 4 },
      { name: "MOM Templates", count: 4 },
      { name: "Ruled pages", count: 40 },
      { name: "Blank pages", count: 20 },
      { name: "Dot Grid Pages", count: 20 },
    ],
  },
};

// --- COMPONENT ---
const Page = () => {
  const router = useRouter();
  const [productType, setProductType] = useState<ProductType>("air");
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProduct = products[productType];
  const images = currentProduct.images;

  const changeQuantity = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setCurrentIndex(0);
    setQuantity(1);
  }, [productType]);

  return (
    <section className="mt-24 bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Product Type Selector */}
        <div className="mb-8 flex justify-center gap-4">
          {(["air", "classic", "eco"] as ProductType[]).map((type) => (
            <button
              key={type}
              onClick={() => setProductType(type)}
              className={`rounded px-4 py-2 font-semibold transition ${
                productType === type
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              {type[0].toUpperCase() + type.slice(1)} Notebook
            </button>
          ))}
        </div>

        <div className="mx-auto flex flex-col gap-8 md:flex-row md:items-start">
          {/* Image Carousel */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-md bg-gray-100">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
                aria-label="Previous Image"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
                aria-label="Next Image"
              >
                →
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-16 w-16 overflow-hidden rounded border transition-colors ${
                    idx === currentIndex
                      ? "border-green-600"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumb ${idx + 1}`}
                    width={64}
                    height={64}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full space-y-6 text-gray-900 md:w-1/2 dark:text-white">
            <h1 className="text-3xl font-bold">{currentProduct.title}</h1>

            <div className="flex items-center gap-4 text-xl font-semibold">
              <span className="text-green-600">₹{currentProduct.price}</span>
              <span className="text-gray-400 line-through dark:text-gray-500">
                ₹{currentProduct.originalPrice}
              </span>
              <span className="rounded bg-green-200 px-2 py-1 text-sm text-green-800">
                {currentProduct.discount}
              </span>
            </div>

            <div>
              <strong>Size:</strong>{" "}
              <span className="rounded bg-green-200 px-2 py-1 text-green-800">
                {currentProduct.size}
              </span>
            </div>

            {/* Quantity */}
            <div>
              <strong>Quantity:</strong>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => changeQuantity(-1)}
                  className="h-8 w-8 rounded border"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => changeQuantity(1)}
                  className="h-8 w-8 rounded border"
                >
                  +
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {currentProduct.quantityNote}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => router.push("/checkout")}
                className="flex-1 rounded bg-green-600 px-6 py-3 text-white"
              >
                Buy Now
              </button>
              <button
              onClick={() => router.push("/cart")}
                className="flex-1 rounded border border-green-600 px-6 py-3 text-green-600"
              >
                Add to Cart
              </button>
            </div>

            {/* Descriptions */}
            <div className="mt-8 border-t pt-6">
              <h2 className="text-xl font-bold underline">Details</h2>
              <p className="mt-2">{currentProduct.description1}</p>
              {currentProduct.description2 && (
                <p className="mt-2">{currentProduct.description2}</p>
              )}
            </div>

            {/* Page Layouts */}
            {currentProduct.pageLayouts && (
              <div className="mt-8 border-t pt-6">
                <h2 className="text-xl font-bold">
                  Page layouts (
                  {currentProduct.pageLayouts.reduce(
                    (sum, layout) => sum + layout.count,
                    0,
                  )}{" "}
                  pages)
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {currentProduct.pageLayouts.map((layout, idx) => (
                    <div
                      key={idx}
                      className="rounded bg-yellow-100 p-3 font-medium"
                    >
                      {layout.name}: {layout.count}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Integrations */}
            {currentProduct.integrationsList && (
              <div className="mt-8 border-t pt-6">
                <h2 className="text-xl font-bold">
                  {currentProduct.integrationsTitle}
                </h2>
                <ul className="mt-2 list-disc pl-6">
                  {currentProduct.integrationsList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {currentProduct.integrationsDetails && (
                  <>
                    <h3 className="mt-4 font-semibold">Integrations:</h3>
                    <ol className="list-decimal pl-6">
                      {currentProduct.integrationsDetails.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
