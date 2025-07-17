"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // List of paths where footer should be hidden
  const hideFooterPaths = [
    "/blog",
    "/blog-details",
    "/blog-sidebar",
    "/checkout",
    "/about",
    "/contact",
    "/cart",
  ];

  const shouldHideFooter = hideFooterPaths.includes(pathname);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          {!shouldHideFooter && <Footer />}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
