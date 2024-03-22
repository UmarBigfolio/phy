"use client";
import React from "react";
import { BlogsTable } from "../../components/BlogsTable";
import { Input } from "../../components/ui/input";
import { CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button";
import Link from "next/link";

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
import Page from "../../components/ui/page";

const Blogs = () => {
  return (
    <Page>
      <div className="flex items-center justify-between space-y-2 py-7">
      <span>
        <h2 className="text-[1.875rem] font-bold">Blogs</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
          </div>
          <Dialog>
            <DialogTrigger asChild>
            <Link href='/blogs/create'>
              <Button variant="">Create Blog</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <BlogsTable />
    </Page>
  );
};

export default Blogs;
