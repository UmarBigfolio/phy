"use client";
import React, { useState } from "react";
import { DataTableDemo } from "../../components/shadTabble";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { CardDescription } from "../../components/ui/card"
import { ScrollArea } from "../../components/ui/scroll-area";


import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import DatePicker from "../../components/DatePicker";

const Students = () => {
 
  return (
    <div className="pr-2">
      <div className="flex items-center justify-between space-y-2 py-7 pl-2 2xl:pl-6">
        <span>
          <h2 className="text-[1.875rem] font-bold">Users</h2>
          <CardDescription>72,500 users</CardDescription>
        </span>
        <div className="flex items-center space-x-2">
        <Dialog>
            <DialogTrigger asChild>
              <Button variant=''>Create User</Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[430px]">
            <div>
              <ScrollArea className="h-[80vh] mt-5 w-[400px]">
            <div className="lg:ml-[2px] lg:mr-5">
              <DialogHeader>
                <DialogTitle>Create User</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex flex-col items-right gap-1 pt-2">
                  <Label htmlFor="maxHeight">Username</Label>
                  <Input
                    id="lastName"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Email</Label>
                  <Input
                    id="email"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Password</Label>
                  <Input
                    id="password"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">College</Label>
                  <Input
                    id="lastName"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Phone</Label>
                  <Input
                    id="phone"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Plans</Label>

                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Plans" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical">Clinical</SelectItem>
                      <SelectItem value="preclinincal">Preclinical</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Role</Label>

                  <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="super-user">Super-admin</SelectItem>
                    </SelectContent>
                  </Select>

                </div>

                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Start Date</Label>
                  <DatePicker />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">End Date</Label>
                  <DatePicker />
                </div>
              </div>
              <DialogFooter className='py-4'>
                <Button type="submit">Submit</Button>
              </DialogFooter>
              </div>
              </ScrollArea>
              </div>
            </DialogContent>
          </Dialog> 
        </div> 
      </div>
      <DataTableDemo />
    </div>
  );
};

export default Students;
