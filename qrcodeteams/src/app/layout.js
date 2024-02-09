import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gerador de QR Code 2ª Vara SSJ VCA",
  description: "GERADOR QR CODE 2ª VARA SSJ VCA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
