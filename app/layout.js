import "./globals.scss";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata = {
  title: "Planning Bootcamp 30",
  description: "Get A Big Dream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>{children}</body>
    </html>
  );
}
