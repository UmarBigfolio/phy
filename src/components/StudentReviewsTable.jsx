"use client";
import React, { useState } from "react";
import RecordTable from "./ui/recordTable";
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
} from "../components/ui/alert-dialog";
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
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import Link from "next/link";
const data = [
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
  {
    id: "m5gr84i9",
    title: "Past Student Review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "other student saying",
  },
];

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("image")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },

  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("content")}</div>
    ),
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("rating")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
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
            <Link href='/testimonials/student-review/edit'>
              <Button variant="secondary">Edit</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
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

export function StudentReviewsTable() {
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

  return <RecordTable columns={columns} data={data} />;
}
