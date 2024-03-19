"use client";
import React from "react";
import { Input } from "../../components/ui/input";
import { CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
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
import { ModuleTable } from "../../components/ModuleTable";

const page = () => {
  return (
    <div className="pr-2">
      <div class="flex items-center justify-between space-y-2 py-7 pl-2 2xl:pl-6">
        <span>
          <h2 className="text-[1.875rem] font-bold">Modules</h2>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2"></div>
          <Dialog>
            <DialogTrigger asChild>
              <Link href="/module/create">
                <Button variant="">Add Module</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <ModuleTable />
    </div>
  );
};

export default page;