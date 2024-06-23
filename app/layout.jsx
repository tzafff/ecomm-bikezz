import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import {Toaster} from "@/components/ui/toaster";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-rajdhani'
});

export const metadata = {
  title: "Bike Store",
  description: "eCommerce shop for Bikes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.variable}>
      <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
      </CartProvider>
      <div className="h-[2000px]"></div>
      </body>
    </html>
  );
}
