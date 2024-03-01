'use client'
import React, { useState } from "react";
import { BadgesTable } from "../../components/BadgesTable";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"
import { Button } from "../../components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu"


const Badges = () => {
    const [position, setPosition] = useState("");
  return (
    <div className="">
      <div class="flex items-center justify-between space-y-2 w-[1330px] md:py-7 pl-6">
        <h2 class="text-3xl font-bold tracking-tight">Badges</h2>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
            {/* <Input placeholder="Search Student" /> */}

          </div>



          <Popover>
            <PopoverTrigger asChild>
              <Button variant="">Create Badge</Button>
            </PopoverTrigger>
          
            <PopoverContent className="w-[400px] mr-[550px] -mt-12">
              <div className="grid gap-4 ">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Create Badge</h4>
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Badge Title</label>
                    <Input
                      id="badgeTitle"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>  
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Badge URL</label>
                    <Input
                      id="Badgeurl"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
<div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Associate badge with</label>
                  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Badges Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="module">Module</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="courses">Courses</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
                  <Button className="mt-2">Submit</Button>
                  
                </div>
              </div>
            </PopoverContent>
          </Popover>


        </div>
      </div>
      <BadgesTable />
    </div>

  );
};

export default Badges;
