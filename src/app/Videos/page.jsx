import React from "react";
import { CardDescription } from "../../components/ui/card"
import {VideosTable} from "../../components/VideosTable"
import { Button } from "../../components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div >
      <div className="flex items-center justify-between space-y-2 py-7 pl-2 2xl:pl-6">
        <span>
          <h2 className="text-[1.875rem] font-bold">Videos</h2>
          <CardDescription>72 videos</CardDescription>
        </span>
        <div className="flex items-center space-x-2">
        <Link href='/videos/create'>
        <Button>Add Video</Button>
        </Link>
       
        </div> 
      </div>
      <VideosTable />
    </div>
  );
};

export default page;
