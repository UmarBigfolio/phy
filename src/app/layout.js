'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import SideNav from "../components/Sidenav";
import { ScrollArea , ScrollBar} from '../components/ui/scroll-area';
import AdminLogin from "../components/AdminLogin"
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={inter.className} >
        <div>
        <span className={cn({'hidden' :pathName === '/admin-login'})}>
          <Header />
          </span>
          <div className="flex">
            <div className='hidden md:block'>
            <span className={cn({'hidden' :pathName === '/admin-login'})}>
              <SideNav/>
              </span>
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
