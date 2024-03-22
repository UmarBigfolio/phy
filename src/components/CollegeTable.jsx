'use client'
import React, { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "./ui/button";
import Link from "next/link";
import RecordTable from "./ui/recordTable";

const data = [
  {
    id: "m5gr84i9",
    students: 316,
    status: "success",
    collegeName: "umar",


    calendars: "1 Year",
    expire: "-",
    emailSuffix: "ken99@yahoo.com",
  },
  {
    id: "m5gr84i9",
    students: 316,
    status: "success",
    collegeName: "umar",

    calendars: "1 Year",
    expire: "-",
    emailSuffix: "ken99@gmail.com",
  },
  {
    id: "p8j3k7h2",
    students: 245,
    status: "pending",
    collegeName: "Alice",

    calendars: "6 Months",
    expire: "2024-08-15",
    emailSuffix: "alice.j@example.com",
  },
  {
    id: "n3b2j8c1",
    students: 150,
    status: "success",
    collegeName: "Elena",

    calendars: "3 Months",
    expire: "2024-06-30",
    emailSuffix: "elena_g@email.com",
  },
  {
    id: "k9d4m2x8",
    students: 200,
    status: "failed",
    collegeName: "John",

    calendars: "1 Month",
    expire: "2024-03-15",
    emailSuffix: "johndoe@example.com",
  },
  {
    id: "g7f5t3w2",
    students: 430,
    status: "success",
    collegeName: "Sophia",

    calendars: "1 Year",
    expire: "2025-02-01",
    emailSuffix: "sophiab@example.com",
  },
  {
    id: "q2z9p8o7",
    students: 280,
    status: "success",
    collegeName: "Michael",

    calendars: "6 Months",
    expire: "2024-09-30",
    emailSuffix: "mike.smith@gmail.com",
  },
  {
    id: "r4v8l1u9",
    students: 180,
    status: "pending",
    collegeName: "Julia",

    calendars: "3 Months",
    expire: "2024-07-10",
    emailSuffix: "julia.lee@example.com",
  },
  {
    id: "t5y0v3s1",
    students: 370,
    status: "success",
    collegeName: "Daniel",

    calendars: "1 Year",
    expire: "2025-01-01",
    emailSuffix: "dwhite@music.edu",
  },
  {
    id: "h1j7k5e3",
    students: 320,
    status: "failed",
    collegeName: "Emma",

    calendars: "1 Month",
    expire: "2024-03-20",
    emailSuffix: "emma.m@example.com",
  },
  {
    id: "x8n2z6b4",
    students: 500,
    status: "success",
    collegeName: "David",

    calendars: "6 Months",
    expire: "2024-10-31",
    emailSuffix: "davidw@example.com",
  }
];




export const columns = [

  {
    accessorKey: "collegeName",
    header: "College Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("collegeName")}</div>,
  },
  {
    accessorKey: "emailSuffix",
    header: "Email Suffix",
    cell: ({ row }) => <div className="capitalize">{row.getValue("emailSuffix")}</div>,
  },
  {
    accessorKey: "calendars",
    header: "Calendars",
    cell: ({ row }) => <div className="capitalize">{row.getValue("calendars")}</div>,
  },
  {
    accessorKey: "students",
    header: "Students",
    cell: ({ row }) => <div className="capitalize">{row.getValue("students")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (

        <div className="flex justify-end gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <Link href='/college/edit' >
                <Button variant='secondary'>Edit</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant='destructive'>Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>          </div>

      );
    },
  },
];

export function CollegeTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <RecordTable data={data} columns={columns} />
  );
}
