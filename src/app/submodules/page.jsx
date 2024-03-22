"use client";
import React, { useState } from "react";
import { CardDescription } from "../../components/ui/card";
import {SubmodulesTable} from "../../components/SubmodulesTable";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Page from "../../components/ui/page";

const page = () => {
  return (
    <Page >
      <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">Submodules</h2>
          <CardDescription>17 Submodules</CardDescription>
        </span>
        <div className="flex items-center space-x-2">
          <Link href="/submodules/create">
            <Button>Add Submodule</Button>
          </Link>
        </div>
      </div>
      <SubmodulesTable />
    </Page>
  );
};

export default page;
