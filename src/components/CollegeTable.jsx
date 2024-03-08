'use client'
import React, { useState } from "react";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
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
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const data = [
  {
    id: "m5gr84i9",
    students: 316,
    status: "success",
    collegeName:"umar",

   
    calendars:"1 Year",
    expire:"-",
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
//   {
//     accessorKey: "role",
//     header: "Role",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
//   },
//   {
//     accessorKey: "course",
//     header: "Course",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("course")}</div>,
//   },
//   {
//     accessorKey: "plan",
//     header: "Plan",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("plan")}</div>,
//   },
//   {
//     accessorKey: "expire",
//     header: "Expire",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("expire")}</div>,
//   },
  
 
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        
            <div className="flex justify-end gap-5">
        <Dialog>
            <DialogTrigger asChild>
            {/* <DotsHorizontalIcon className="h-4 w-4 cursor-pointer" /> */}
        <Button variant='secondary'>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit College</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 ">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">College Name *</Label>
                    <Input
                      id="collegeName"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>  
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Email Suffix *</Label>
                    <Input
                      id="emailSuffix"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Calendars</Label>
                    <Input
                      id="password"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>                   
                </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
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
    <div className="w-full pl-2 2xl:pl-5">
      <div className="flex items-center py-4">
        {/* <Input
          placeholder="Search Student"
          value={(table.getColumn("email")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-[240px]"
        /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
