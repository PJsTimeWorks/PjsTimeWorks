import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./cart-context";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "PJ's Time Works",
  description: "Watches built with soul and story.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <nav className="p-4">
            <a href="/cart" className="text-white hover:underline">
              Cart
            </a>
          </nav>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
