"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

export default function Features() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title=" step by step guide How It Works & Key Features"
          paragraph="ReNote combines the best of analog and digital with a seamless four-step workflow designed to transform your note-taking experience"
          center
          mb="80px"
        />

        {/* Feature Step 1 */}
        <div className="mb-16 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">Use Pilot Frixion Pens</h2>
            <p className="mb-4 text-gray-600">
              Write and rewrite until it's right using Pilot Frixion Pens as the
              paper and ink are in tune with each other for unlimited do-overs.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-900 dark:text-white">
              <li>✅ Familiar writing experience</li>
              <li>✅ Erasable ink for corrections</li>
              <li>✅ No learning curve - just write!</li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <Image
              src="/images/video/pen.jpg"
              alt="Pilot Frixion Pens"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Feature Step 2 */}
        <div className="mb-16 flex flex-col-reverse flex-wrap items-center md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <Image
              src="/images/video/phone.jpg"
              alt="ReNote Sync"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">
              Scan with ReNote AI App and Sync with Your Favourite Apps
            </h2>
            <p className="mb-4 text-gray-600">
              Open the ReNote app and scan your page with a single tap to sync
              with your favorite productivity tools.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-900 dark:text-white">
              <li>
                ✅ Sync with Google Tasks, Apple Reminders, Microsoft To-Do
              </li>
              <li>✅ Schedule meetings with Teams and Google Meet</li>
              <li>✅ Create and share MOM via Gmail, Outlook</li>
              <li>✅ Auto scan and sync with ReNote Cloud</li>
            </ul>
          </div>
        </div>

        {/* Feature Step 3 */}
        <div className="mb-16 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">AI Bot & OCR</h2>
            <p className="mb-4 text-gray-600">
              Let our advanced AI transform your handwritten notes into
              actionable digital content.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-900 dark:text-white">
              <li>✅ AI Summarization & Smart Search for quick access</li>
              <li>✅ Handwriting to Digital Text (OCR) with AI Assistance</li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <Image
              src="/images/video/chatbot.jpg"
              alt="AI Bot and OCR"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Feature Step 4 */}
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 md:w-1/2">
            <Image
              src="/images/video/pen2.webp"
              alt="pen image"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">Effortless Erasing</h2>
            <p className="mb-4 text-gray-600">
              When you're done, simply erase and start fresh for a sustainable
              note-taking experience.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-900 dark:text-white">
              <li>✅ Use in-built eraser in pen to undo mistakes</li>
              <li>✅ To erase the full page, use wet cloth/tissue</li>
              <li>✅ Environmentally friendly reusable solution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
