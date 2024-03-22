import React from "react";
import { CardDescription } from "../../components/ui/card"
import {VideosTable} from "../../components/VideosTable"
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Page from "../../components/ui/page";

const page = () => {
  return (
    <Page>
      <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">Videos</h2>
          <CardDescription>72 videos</CardDescription>
        </span>
        <div className="flex items-center space-x-2">
        <Link href='/Video/create'>
        <Button>Add Video</Button>
        </Link>
       
        </div> 
      </div>
      <VideosTable />
    </Page>
  );
};

export default page;
