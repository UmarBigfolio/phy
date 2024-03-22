"use client";
import React, { useState } from "react";
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
import RecordTable from "./ui/recordTable";

const data = [
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
  },
  {
    id: "m5gr84i9",
    title: "Employee review",
    content: "personal opinion",
    rating: "4",
    image: "-",
    category: "PAST EMPLOYEES THINK",
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
              <Button variant="secondary">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update Story</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 ">
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Badge Title</Label>
                  <Input
                    id="title"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Badge URL</Label>
                  <Input
                    id="Badgeurl"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Associate badge with</Label>
                  <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="Badges Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="module">Module</SelectItem>
                      <SelectItem value="courses">Courses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
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
          </AlertDialog>{" "}
        </div>
      );
    },
  },
];

export function EmployeeReviewTable() {
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
