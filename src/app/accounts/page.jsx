import { DataTableDemo } from '../../components/shadTabble'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <div class="flex items-center justify-between space-y-2 w-[1330px] md:py-7 pl-6">
        <h2 class="text-3xl font-bold tracking-tight">Accounts</h2>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
          {/* <Input placeholder="Search Student"/> */}
           
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            Create Account
          </button>
        </div>
      </div>
      <DataTableDemo />
    </div>
  )
}

export default page