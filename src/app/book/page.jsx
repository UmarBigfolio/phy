"use client";
import React from "react";
import { BookTable } from "../../components/BookTable";
import { Input } from "../../components/ui/input";
import { CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button";

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

const Book = () => {
  return (
    <div className="pr-2">
      <div class="flex items-center justify-between space-y-2 md:py-7 pl-2 2xl:pl-6">
      <span>
        <h2 className="text-[1.875rem] font-bold">Books</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="">Add Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Book</DialogTitle>
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
      <BookTable />
    </div>
  );
};

export default Book;
