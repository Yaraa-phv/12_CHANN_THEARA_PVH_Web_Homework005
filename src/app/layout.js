import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
// import TestImg from "../components/side-bar"; // Adjust the path as needed
import SideBar from "@/components/side-bar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Homework005",
  description: "12_CHANN_THEARA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex`}>
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
