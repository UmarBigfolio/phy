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
import Link from "next/link";
import Page from "../../components/ui/page";

const HowToUse = () => {
  return (
    <Page >
      <div className="flex items-center justify-between space-y-2 py-7">
      <span>
        <h2 className="text-[1.875rem] font-bold">How to Use</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
          </div>
          <Dialog>
            <DialogTrigger asChild>
            <Link href='/how-to-use/create'>
              <Button variant="">Add Use</Button>
            </Link>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <HowToUseTable />
    </Page>
  );
};

export default HowToUse ;
