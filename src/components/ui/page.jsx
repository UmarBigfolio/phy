import React from "react";
import CardDescription from "./card";
import Link from "next/link";
import { Button } from "./button";


const Page = ({ children}) => {
  return (
    <div className="px-4 2xl:px-6">
     {children}
   </div>
    
  )
}

export default Page