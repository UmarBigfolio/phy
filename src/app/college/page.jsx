import React from "react";
import { CollegeTable } from "../../components/CollegeTable";
import { Input } from "../../components/ui/input";
import { CardDescription } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";


const College = () => {
  return (
    <div className="pr-2">
      <div class="flex items-center justify-between space-y-2 md:py-7 pl-6">
      <span>
        <h2 className="text-[1.875rem] font-bold">Colleges</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">

          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="">Insert College</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Insert College</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              
                <div className="grid gap-4">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">College Name *</Label>
                    <Input
                      id="collegeName"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>  
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Email Suffix *</Label>
                    <Input
                      id="emailSuffix"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Calendars</Label>
                    <Input
                      id="password"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>                   
                </div>
          
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        
        </div>
      </div>
      <CollegeTable />
    </div>

  );
};

export default College;
