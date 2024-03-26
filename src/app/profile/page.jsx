'use client'
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const [inputType1, setInputType1] = useState("password");

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
    setInputType1(showPassword1 ? "password" : "text");
  };

  const [showPassword2, setShowPassword2] = useState(false);
  const [inputType2, setInputType2] = useState("password");

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
    setInputType2(showPassword2 ? "password" : "text");
  };

  return (
    <div className="flex flex-col md:flex-row mt-10 px-2 items-center gap-5 md:gap-0">
      <div className="w-[30%] flex justify-center">
        <Avatar className="h-28 w-28 ">
          <AvatarImage src="https://picsum.photos/seed/picsum/200/300" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[70% flex justify-center">
        <div>
          <span className="flex flex-col gap-4">
            <h2 className="text-[1.875rem] font-bold">Bigfolio Admin</h2>
            <CardDescription> Email : hello@bigfolio.co</CardDescription>
            <CardDescription> Genrer : Male</CardDescription>
            <CardDescription> Address : hello@bigfolio.co</CardDescription>
          </span>
          <div className="mt-4 flex gap-4">
          <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 ">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">First name</Label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Last name</Label>
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
                    <Label htmlFor="maxHeight">Address</Label>
                    <Input
                      id="address"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>

                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Gender</Label>
                    <Select>
                      <SelectTrigger className="outline-none">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Change Password</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 ">
                  <div className="flex flex-col items-right gap-1 relative">
                    <Label htmlFor="maxHeight">Old Password</Label>
                    <div className="flex justify-end">
                      <Input
                        type={inputType}
                        id="oldPassword"
                        defaultValue=""
                        className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                      />
                      { inputType === 'password' ? 
                      <EyeOff
                        size={20}
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                      />
                        :<Eye
                        size={20}
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                      />
                      }

                    </div>
                  </div>
                  <div className="flex flex-col items-right gap-1 relative">
                    <Label htmlFor="maxHeight">New Password</Label>
                    <div className="flex justify-end">
                      <Input
                        type={inputType1}
                        id="newPassword"
                        defaultValue=""
                        className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                      />
                      { inputType1 === 'password' ? 
                      <EyeOff
                        size={20}
                        type="button"
                        onClick={togglePasswordVisibility1}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                      />
                        :<Eye
                        size={20}
                        type="button"
                        onClick={togglePasswordVisibility1}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                      />
                      }
                    </div>
                  </div>
                  <div className="flex flex-col items-right gap-1 relative">
                    <Label htmlFor="maxHeight">Confirm Password</Label>
                    <div className="flex justify-end">
                      <Input
                        type={inputType2}
                        id="confirmPassword"
                        defaultValue=""
                        className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                      />
                      { inputType2 === 'password' ? 
                      <EyeOff
                        size={20}
                        type="button"
                        onClick={togglePasswordVisibility2}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                      />
                        :<Eye
                        size={20}
                        type="button"
                        onClick={togglePasswordVisibility2}
                        className="mt-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                      />
                      }
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Update</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
