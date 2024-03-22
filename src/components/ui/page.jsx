import React from "react";
import {CardDescription} from "./card";
import Link from "next/link";
import { Button } from "./button";


const Page = ({ children ,title='' , subTitle='' , href='' , btnContent=''}) => {
  return (
    <div className="px-4 2xl:px-6">
    {title && subTitle &&  
    <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">{title}</h2>
          <CardDescription>{subTitle}</CardDescription>
        </span>
        
          { btnContent && 
            <div className="flex items-center space-x-2">
        <Link href={href}>
        <Button>{btnContent}</Button>
        </Link>
        </div> 
          }
       
      </div>}
     {children}
   </div>
    
  )
}

export default Page