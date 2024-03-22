"use client";
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

import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import RecordTable from "./ui/recordTable";

const data = [
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    name: "Story",
    image: "https://physeo-prod.s3.amazonaws.com/1708977636110-Emily.png",
    role: "Public Health Sciences",
  },
];

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) =>
    
    <Avatar>
      <AvatarImage src={row.getValue("image")}></AvatarImage>
    </Avatar>
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },

  {
    accessorKey: "space",
    header: "",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("space")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("role")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex items-center gap-5 justify-end">

<Dialog>
            <DialogTrigger asChild>
            <Link href='/story/edit'>
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
</AlertDialog>
        </div>
      );
    },
  },
];

export function OurStoryTable() {
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
    <RecordTable columns={columns} data={data}/>
  );
}
