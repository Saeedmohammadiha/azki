import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Image from "next/image";
import carImage from "../assets/icons/car-green.svg";
import localFont from "next/font/local";

const vazir = localFont({
  src: "../assets/fonts/Vazir.woff2",
});

export const metadata: Metadata = {
  title: "سامانه مقایسه و خرید آنلاین بیمه",
  description: "this is a test app for azki",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={vazir.className}
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
