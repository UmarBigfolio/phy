"use client";
import React, { useState } from "react";
import { UserTable } from "../../components/UserTable";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { CardDescription } from "../../components/ui/card"
import Page from "../../components/ui/page"



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
import Link from "next/link";


const Students = () => {
 
  return (
    <Page>
      <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">Users</h2>
          <CardDescription>72,500 users</CardDescription>
        </span>
        <div className="flex items-center space-x-2">
        <Link href='/user/create'>
        <Button>Create User</Button>
        </Link>
        </div> 
      </div>
      <UserTable />
      </Page>
  );
};

export default Students;
