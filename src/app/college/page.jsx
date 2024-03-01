import React from "react";
import { CollegeTable } from "../../components/CollegeTable";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"
import { Button } from "../../components/ui/button";


const College = () => {
  return (
    <div className="">
      <div class="flex items-center justify-between space-y-2 w-[1330px] md:py-7 pl-6">
        <h2 class="text-3xl font-bold tracking-tight">Colleges</h2>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
            {/* <Input placeholder="Search Student" /> */}

          </div>



          <Popover>
            <PopoverTrigger asChild>
              <Button variant="">Insert College</Button>
            </PopoverTrigger>
          
            <PopoverContent className="w-[400px] mr-[550px] -mt-12">
              <div className="grid gap-4 ">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Insert College</h4>
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">College Name *</label>
                    <Input
                      id="collegeName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>  
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Email Suffix *</label>
                    <Input
                      id="emailSuffix"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Calendars</label>
                    <Input
                      id="password"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                 
                  <Button className="mt-2">Submit</Button>
                  
                </div>
              </div>
            </PopoverContent>
          </Popover>


        </div>
      </div>
      <CollegeTable />
    </div>

  );
};

export default College;
