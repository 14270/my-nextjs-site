"use client";
import React from "react";

const Pricing = () => {
  return (
    <>
      {/* Why Choose Our Smart Reusable Notebook Section */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="mb-6 text-4xl font-bold">
              Why Choose Our Smart Reusable Notebook?
            </h2>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <p>
                  Our smart reusable notebooks address environmental impact and
                  plastic concerns.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <p>
                  They are made with a special non-tearable and waterproof
                  material.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">♻️</span>
                <p>
                  The eco-friendly paper used is recycled and FSC certified.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <p>Each sheet of paper is reusable up to 100 times.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <p>
                  Smart templates like to-do lists and meeting schedules enhance
                  workflow and productivity.
                </p>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <img
              src="/images/testimonials/notebook.jpg"
              alt="ReNoteAI Smart Notebook"
              className="h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
