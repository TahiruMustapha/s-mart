import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";


const urbanist = Urbanist({
  // weight: [ '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shop Mart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-main-bg w-full text-darkText`}>
        <Layout>
          <Header/>
          {children} 
          <Footer/>
        </Layout>
      </body>
    </html>
  );
}