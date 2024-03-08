
import React from "react";
import FileManagerTable from "../../components/FileManagerTable"

import { CardDescription } from "../../components/ui/card"

const page = () => {
  return (
    <>

    <div className="pr-2">
      <div class="flex items-center justify-between space-y-2 md:py-7 pl-6">
      <span>
        <h2 className="text-[1.875rem] font-bold">File manager</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
      </div>
    </div>
    <FileManagerTable />
   
</>
  )
}

export default page