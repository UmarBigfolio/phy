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
import Link from "next/link";
import Page from "../../components/ui/page";

const College = () => {
  return (
    <Page>
      <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">Colleges</h2>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2"></div>

          <Dialog>
            <DialogTrigger asChild>
              <Link href="/college/create">
                <Button variant="">Insert College</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <CollegeTable />
    </Page>
  );
};

export default College;
