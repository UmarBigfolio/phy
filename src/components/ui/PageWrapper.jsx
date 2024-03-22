import Link from "next/link";
import React from "react";
import {Button} from "./button"
import { CardDescription } from "./card";

const PageWrapper = ({ children , title ='' , subTitle =''}) => {
  return (
    <div>
      <div className="px-4 2xl:px-6">
      <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">{title}</h2>
          <CardDescription>{subTitle}</CardDescription>
        </span>
        <div className="flex items-center space-x-2">
        <Link href='/'>
        <Button>klklkl</Button>
        </Link>
        </div> 
      </div>
      {children}
      </div>
    </div>
  );
};

export default PageWrapper;
