"use client";
import React from "react";
import { PageHeaderTable } from "../../components/PageHeaderTable";
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
import Link from "next/link";
import Page from "../../components/ui/page";

const PageHeader = () => {
  return (
    <Page title="Page Header" subTitle="Deploy your new project in one-click" href="/page_header/create" btnContent="Add Header">
      <PageHeaderTable />
    </Page>
  );
};

export default PageHeader;
