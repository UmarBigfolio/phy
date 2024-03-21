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

  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="">
      {/* <AdminLogin /> */}
          <Header/>
          <div className="flex">
            <div className='hidden md:block'>
              <SideNav/>
            </div>
            <div className="w-[100%]">
              <div className="h-14"></div>
              {children} 
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
