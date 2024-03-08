"use client";
import React, { useState } from "react";
import { DataTableDemo } from "../../components/shadTabble";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { CardDescription } from "../../components/ui/card"

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

const Students = () => {
 
  return (
    <div className="pr-2">
      <div className="flex items-center justify-between space-y-2 md:py-7 pl-2 2xl:pl-6">
        <span>
          <h2 className="text-[1.875rem] font-bold">Students</h2>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </span>
        {/* <div className="flex items-center space-x-2">
          <div className="grid gap-2 ">
            <Input
              placeholder="Search Student"
              className="focus-visible:outline-none focus-visible:ring-0"
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="">Create Account</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create User</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Email</Label>
                  <Input
                    id="email"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0 "
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Last Name</Label>
                  <Input
                    id="lastName"
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
                  <Label htmlFor="maxHeight">Phone</Label>
                  <Input
                    id="phone"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Role</Label>

                  <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">user</SelectItem>
                      <SelectItem value="admin">admin</SelectItem>
                      <SelectItem value="super-user">super-user</SelectItem>
                    </SelectContent>
                  </Select>

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
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog> 
        </div> */}
      </div>
      <DataTableDemo />
    </div>
  );
};

export default Students;
