'use client'
import { useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import SideNav from "../components/Sidenav";
import { ScrollArea , ScrollBar} from '../components/ui/scroll-area';
import AdminLogin from "../components/AdminLogin"

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="max-w-[1550px] mx-auto">
      {/* <AdminLogin /> */}
          <Header toggleSideNav={toggleSideNav}/>
          <ScrollArea>
          <div className="flex">
            {isSideNavOpen && 
            <div className='navigation'>
              <SideNav toggleSideNav={toggleSideNav}/>
            </div>}
            <div className="w-[100%]">
              <div className="h-14"></div>
              {children}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </body>
    </html>
  );
}
