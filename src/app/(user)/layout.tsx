import "../globals.css";
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Banner from "../../../components/Banner";

export const metadata: Metadata = {
  title: "Cat Blog",
  description: "Created by Mohammed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
