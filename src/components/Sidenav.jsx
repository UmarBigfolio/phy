"use client"
import React, { useState } from "react";
import { ScrollArea } from "../components/ui/scroll-area"
import Link from 'next/link'
import { Award, BookOpen, BookmarkCheck, CircleFadingPlus, FileSliders, Landmark, Layers, NotebookText, StarHalf, TabletSmartphone, User } from "lucide-react";
const SideNav = () => {
  const [activeLink, setActiveLink] = useState(null);


  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const links = [
    {
      text: "Home",
    href:"/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        </svg>
      ),
    },
    {
      text: "Student",
      href:"/students",
      icon: ( <User   width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       className="mr-2 h-4 w-4"/>
      ),
    },
    {
      text: "Colleges",
      href:"/college",
      icon: (<Landmark  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
    {
      text: "Badges",
      href:"/badges",
      icon: (<Award  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
    {
      text: "Coupons",
      href:"/coupons",
      icon: (<BookmarkCheck  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
    {
      text: "Blogs",
      href:"/blogs",
      icon: (<FileSliders xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      
      ),
    },
    {
      text: "Our Story",
      href:"/story",
      icon: (<CircleFadingPlus   xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
    {
      text: "How to use",
      href:"/how-to-use",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
     {
      text: "Review",
      href:"/review",
      icon: (<StarHalf  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
     {
      text: "Book",
      href:"/book",
      icon: (<BookOpen xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
     {
      text: "Testimonials",
      href:"/testimonials",
      icon: (<TabletSmartphone  xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
     {
      text: "Page Header",
      href:"/page_header",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
     {
      text: "Custom Pages",
      href:"/custom_pages",
      icon: (<Layers xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2 h-4 w-4"/>
      ),
    },
  ];
  

  return (
    <div className="mt-6 h-[1000px] border-r-[1px]">
    <div className="w-16 md:w-[200px] pt-16">
      <nav className="grid gap-1 px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            className={`inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 justify-start ${
              activeLink === index ? "bg-black text-white" : "hover:bg-accent hover:text-accent-foreground"
            }`}
            href={link?.href || '' }
            onClick={() => handleLinkClick(index)}
          >
            {link.icon}
            <span className="hidden md:inline">{link.text}</span>
          </Link>
        ))}
      </nav>
    </div>
    </div>
  );
};

export default SideNav;
