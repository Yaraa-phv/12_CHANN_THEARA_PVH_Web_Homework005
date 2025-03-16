import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
// import TestImg from "../components/side-bar"; // Adjust the path as needed
import SideBar from "@/components/side-bar";
import SearchBar from "@/components/search";


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
        <div className="sm:w-[20%]">
          <SideBar />
        </div>

        <div className="sm:w-[80%]">
          <div className="sm:w-full overflow-hidden sm:h-screen flex flex-col text-[#0B3954]">
            <div className="sm:w-[93%] rounded-3xl sm:mt-6 sm:ml-9 sm:h-fit">
              <SearchBar className="self-center" />
            </div>
            <div className="sm:w-[93%]  rounded-t-3xl sm:ml-9 sm:mt-6 sm:h-[90%] bg-[#F5F7F8]">
              {children}
            </div>
          </div>
        </div>


      </body>
    </html>
  );
}
