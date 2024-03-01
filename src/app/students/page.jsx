import React from "react";
import { DataTableDemo } from "../../components/shadTabble";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"
import { Button } from "../../components/ui/button";


const Students = () => {
  return (
    <div className="">
      <div class="flex items-center justify-between space-y-2 w-[1330px] md:py-7 pl-6">
        <h2 class="text-3xl font-bold tracking-tight">Students</h2>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
            <Input placeholder="Search Student" />

          </div>



          <Popover>
            <PopoverTrigger asChild>
              <Button variant="">Create Account</Button>
            </PopoverTrigger>
          
            <PopoverContent className="w-[400px] mr-[550px] -mt-12">
              <div className="grid gap-4 ">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Create User</h4>
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Email</label>
                    <Input
                      id="email"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>  
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">First Name</label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Last Name</label>
                    <Input
                      id="lastName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Password</label>
                    <Input
                      id="password"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Phone</label>
                    <Input
                      id="phone"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 

                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Role</label>
                    <Input
                      id="role"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Plans</label>
                    <Input
                      id="plans"
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
      <DataTableDemo />
    </div>

  );
};

export default Students;
