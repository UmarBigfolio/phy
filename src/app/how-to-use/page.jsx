"use client";
import React from "react";
import { Input } from "../../components/ui/input";
import { CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button";
import {HowToUseTable} from "../../components/HowToUseTable"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
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

const HowToUse = () => {
  return (
    <div className="pr-2">
      <div class="flex items-center justify-between space-y-2 md:py-7 pl-6">
      <span>
        <h2 className="text-[1.875rem] font-bold">How to Use</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
            {/* <Input placeholder="Search Student" /> */}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="">Add Use</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Story</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 ">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Badge Title</Label>
                    <Input
                      id="badgeTitle"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Badge URL</Label>
                    <Input
                      id="Badgeurl"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Associate badge with</Label>
                    <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="Story Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="module">Module</SelectItem>
                      <SelectItem value="courses">Courses</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>
                </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <HowToUseTable />
    </div>
  );
};

export default HowToUse ;
