import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Image from "next/image";
import carImage from "../assets/icons/car-green.svg";
import localFont from "next/font/local";

const yekan = localFont({
  src: "../assets/fonts/Yekan.woff2",
  variable: "--font-yekan",
});

export const metadata: Metadata = {
  title: "سامانه مقایسه و خرید آنلاین بیمه",
  description: "this is a test app for azki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={yekan.className}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="layout">
          <Navbar />
          <main className="children-container">{children}</main>
          <div className="image-container">
            <Image src={carImage} alt="car image" />
          </div>
        </div>
      </body>
    </html>
  );
}
