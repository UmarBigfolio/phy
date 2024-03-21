'use client'
import React, { useState } from "react";
import { PopoverDemo } from "./myProfilePopOver";
import { AlignLeft } from "lucide-react";
import { Award, BookOpen, BookmarkCheck, CircleFadingPlus, FileSliders, Landmark, Layers, NotebookText, StarHalf, TabletSmartphone, User } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import SideNav from "./Sidenav";
import { ScrollArea } from "./ui/scroll-area";

export function TypographySmall() {
  return (
    <>
      <div className="flex justify-center items-center">
        <PopoverDemo />
      </div>
    </>
  );
}

const Header = () => {

  return (<>
    <div className=" fixed w-full top-0 z-50">
      <header className=" px-4 sticky top-0 z-50 w-full border-b-[1px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between">
          <div className="">
            <a className="flex items-center space-x-2" href="/">
              <span>
                <img
                  className="filter invert-[100%] w-[120px] md:w-[200px] "
                  src="https://www.physeo.com/images/logo.png"
                  alt="kllkll"
                />
              </span>
            </a>
          </div>

          <div className="flex items-center justify-between space-x-2 md:justify-end">
            <TypographySmall />
            <div className="">
              <Sheet >
                <SheetTrigger asChild>
                  <AlignLeft className='block md:hidden'/>
                </SheetTrigger>
                <SheetContent className='w-[200px]'>
                <ScrollArea className='h-full'>
                  <SideNav />
                </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>

  </>
  );
};

export default Header;
