import { Rajdhani } from "next/font/google";
import "./globals.css";

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
      <body className={rajdhani.variable}>{children}</body>
    </html>
  );
}
