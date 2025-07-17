"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-dark relative z-10 bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* ReNoteAI Address */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
              ReNoteAI
            </h2>
            <p className="text-body-color dark:text-body-color-dark text-base">
              ReNote AI Pvt Ltd,
              <br />
              T-Hub Phase 2.0,
              <br />
              Madhapur, Hyderabad,
              <br />
              Telangana, India - 500081.
              <br />
              <br />
              +91 8886661396
              <br />
              +91 8886663326
              <br />
              <a href="mailto:sales@renote.ai" className="underline">
                sales@renote.ai
              </a>
            </p>
            {/* Social Icons */}
            <div className="mt-4 flex space-x-4">
              <a
                href="/"
                className="text-body-color hover:text-primary text-xl dark:text-white"
              >
                🌐
              </a>
              <a
                href="/"
                className="text-body-color hover:text-primary text-xl dark:text-white"
              >
                X
              </a>
              <a
                href="/"
                className="text-body-color hover:text-primary text-xl dark:text-white"
              >
                📸
              </a>
              <a
                href="/"
                className="text-body-color hover:text-primary text-xl dark:text-white"
              >
                🔗
              </a>
              <a
                href="/"
                className="text-body-color hover:text-primary text-xl dark:text-white"
              >
                ▶️
              </a>
            </div>
          </div>

          {/* USA Contact */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
              Coming Soon to U.S.A
            </h2>
            <p className="text-body-color dark:text-body-color-dark text-base">
              <strong>CONTACT - U.S.A</strong>
              <br />
              18316 SW 4th St,
              <br />
              Pembroke Pines, Florida,
              <br />
              33029-4305, United States
              <br />
              <br />
              +1 754 257 0162
            </p>
          </div>

          {/* Products */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
              Products
            </h2>
            <ul className="text-body-color dark:text-body-color-dark space-y-2 text-base">
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/app">App</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
              Policies
            </h2>
            <ul className="text-body-color dark:text-body-color-dark space-y-2 text-base">
              <li>
                <Link href="/return-policy">Return & Refund Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Download Our App */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
              Download Our App
            </h2>
            <div className="flex gap-4">
              <a
                href="https://apps.apple.com/in/app/renote-ai-scanner-ocr-gpt/id6479944118"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.renote"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-700">
          <p className="text-body-color text-center text-base dark:text-white">
            © {new Date().getFullYear()} ReNoteAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
