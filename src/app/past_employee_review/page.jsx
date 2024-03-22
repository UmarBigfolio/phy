"use client";
import React from "react";
import { Input } from "../../components/ui/input";
import { CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button";
import {EmployeeReviewTable} from "../../components/EmployeeReviewTable"

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

const PastEmployeeReview = () => {
  return (
    <Page title="Past Employee Reviews" subTitle="Deploy your new project in one-click." btnContent="Create Review">
      <EmployeeReviewTable />
    </Page>
  );
};

export default PastEmployeeReview;
