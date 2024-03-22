
import React from "react";
import FileManagerTable from "../../components/FileManagerTable"

import { CardDescription } from "../../components/ui/card"
import Page from "../../components/ui/page";

const page = () => {
  return (
    <>

    <Page>
      <div className="flex items-center justify-between space-y-2 py-7">
      <span>
        <h2 className="text-[1.875rem] font-bold">File manager</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
      </div>
    <FileManagerTable />
    </Page>
   
</>
  )
}

export default page