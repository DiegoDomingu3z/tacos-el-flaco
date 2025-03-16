import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tacos El Flaco",
  description: "Tacos El Flaco brings the bold flavors of Mexico to Boise, Idaho! Enjoy authentic street tacos, burritos, tortas, and more—made fresh with traditional recipes and high-quality ingredients.",
  icons: {
    icon: "/logo-2.png",  // Change this if using a different file type
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
