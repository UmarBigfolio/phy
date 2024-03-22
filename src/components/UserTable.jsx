"use client";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
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
} from "./ui/alert-dialog"
import { Label } from "./ui/label";
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Link from "next/link";

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "umar atiq",
    user_name: "bbb",
    phone: "4262055",
    role: "student",
    course: "clinical",
    plan: "1 Year",
    expire: "-",
    start_date: '2024-10-31',
    email: "ken99@yahoo.com",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "umar",
    user_name: "bbb",
    phone: "4262055",
    role: "student",
    course: "clinical",
    plan: "1 Year",
    expire: "-",
    start_date: '2024-10-31',
    email: "ken99@gmail.com",
  },
  {
    id: "p8j3k7h2",
    amount: 245,
    status: "pending",
    name: "Alice",
    user_name: "Johnson",
    phone: "1234567",
    role: "user",
    course: "programming",
    plan: "6 Months",
    expire: "2024-08-15",
    start_date: '2024-10-31',
    email: "alice.j@example.com",
  },
  {
    id: "n3b2j8c1",
    amount: 150,
    status: "success",
    name: "Elena",
    user_name: "Garcia",
    phone: "9876543",
    role: "super admin",
    course: "mathematics",
    plan: "3 Months",
    expire: "2024-06-30",
    start_date: '2024-10-31',
    email: "elena_g@email.com",
  },
  {
    id: "k9d4m2x8",
    amount: 200,
    status: "failed",
    name: "John",
    user_name: "Doe",
    phone: "5551234",
    role: "admin",
    course: "biology",
    plan: "1 Month",
    expire: "2024-03-15",
    start_date: '2024-10-31',
    email: "johndoe@example.com",
  },
  {
    id: "g7f5t3w2",
    amount: 430,
    status: "success",
    name: "Sophia",
    user_name: "Brown",
    phone: "2223333",
    role: "instructor",
    course: "chemistry",
    plan: "1 Year",
    expire: "2025-02-01",
    start_date: '2024-10-31',
    email: "sophiab@example.com",
  },
  {
    id: "q2z9p8o7",
    amount: 280,
    status: "success",
    name: "Michael",
    user_name: "Smith",
    phone: "7778888",
    role: "student",
    course: "preclinical",
    plan: "6 Months",
    expire: "2024-09-30",
    start_date: '2024-10-31',
    email: "mike.smith@gmail.com",
  },
  {
    id: "r4v8l1u9",
    amount: 180,
    status: "pending",
    name: "Julia",
    user_name: "Lee",
    phone: "4445555",
    role: "student",
    course: "preclinical",
    plan: "3 Months",
    expire: "2024-07-10",
    start_date: '2024-10-31',
    email: "julia.lee@example.com",
  },
  {
    id: "t5y0v3s1",
    amount: 370,
    status: "success",
    name: "Daniel",
    user_name: "White",
    phone: "9990000",
    role: "instructor",
    course: "music theory",
    plan: "1 Year",
    expire: "2025-01-01",
    start_date: '2024-10-31',
    email: "dwhite@music.edu",
  },
  {
    id: "h1j7k5e3",
    amount: 320,
    status: "failed",
    name: "Emma",
    user_name: "Martinez",
    phone: "1112222",
    role: "student",
    course: "psychology",
    plan: "1 Month",
    expire: "2024-03-20",
    start_date: '2024-10-31',
    email: "emma.m@example.com",
  },
  {
    id: "x8n2z6b4",
    amount: 500,
    status: "success",
    name: "David",
    user_name: "Wilson",
    phone: "6667777",
    role: "student",
    course: "geography",
    plan: "6 Months",
    expire: "2024-10-31",
    start_date: '2024-10-31',
    email: "davidw@example.com",
  },
];

export const columns = [
  {
    accessorKey: "user_name",
    header: "Username",
    cell: ({ row }) => <div className="capitalize">{row.getValue("user_name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("course")}</div>
    ),
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => <div className="capitalize">{row.getValue("plan")}</div>,
  },
  {
    accessorKey: "start_date",
    header: "Start date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("start_date")}</div>
    ),
  },
  {
    accessorKey: "expire",
    header: "End date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("expire")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex justify-end gap-5 ">
          <Dialog>
            <DialogTrigger asChild>
            <Link href='user/edit'>
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
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your data from our server.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>
      );
    },
  },
];

export function UserTable() {

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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-3 pb-4">
        <Input
          placeholder="Search student"
          value={(table.getColumn("email")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-[340px] md:w-[240px] focus-visible:ring-0"
        />
        <div className="flex gap-6 sm:gap-3">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex justify-center items-center gap-2  cursor-pointer border border-dashed py-2.5 px-5 sm:px-2 rounded-md">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  <small className="text-xs font-medium leading-none  md:flex ">
                    Plan
                  </small>
                </div>
              </PopoverTrigger>
              <PopoverContent align='start'  className="w-[200px]">
                <div>
                  <div role="group">
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox id="month" />
                        <label
                          htmlFor="month"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Month-to-Month
                        </label>
                      </div>

                    </div>
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox id="1year" />
                        <label
                          htmlFor="1year"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          1 Year
                        </label>
                      </div>

                    </div>
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox id="2year" />
                        <label
                          htmlFor="2year"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          2 Year
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex justify-center items-center gap-2  cursor-pointer border border-dashed py-2.5 px-5 sm:px-2 rounded-md">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  <small className="text-xs font-medium leading-none  md:flex ">
                    Role
                  </small>
                </div>
              </PopoverTrigger>
              <PopoverContent align='start' className="w-[200px]">
                <div>
                  <div role="group">
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                     <div className="flex items-center space-x-2">
                        {/* <Checkbox id="clinical" /> */}
                        <input
                          id="user"
                          type='checkbox'
                          checked={(table.getColumn("role")?.getFilterValue() === 'user')}
                          onChange={(event) => {
                            const isChecked = event.target.checked;
                            table.getColumn("role")?.setFilterValue(isChecked ? 'user' : '');
                          }}
                          className="focus-visible:ring-0 h-4 w-4"
                        />
                        <label
                          htmlFor="user"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          User
                        </label>

                      </div>

                    </div>
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center space-x-2">
                        {/* <Checkbox id="clinical" /> */}
                        <input
                          id="admin"
                          type='checkbox'
                          checked={(table.getColumn("role")?.getFilterValue() === 'admin')}
                          onChange={(event) => {
                            const isChecked = event.target.checked;
                            table.getColumn("role")?.setFilterValue(isChecked ? 'admin' : '');
                          }}
                          className="focus-visible:ring-0 h-4 w-4"
                        />
                        <label
                          htmlFor="admin"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Admin
                        </label>

                      </div>

                    </div>

                     <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center space-x-2">
                        {/* <Checkbox id="clinical" /> */}
                        <input
                          id="super_user"
                          type='checkbox'
                          checked={(table.getColumn("role")?.getFilterValue() === 'super admin')}
                          onChange={(event) => {
                            const isChecked = event.target.checked;
                            table.getColumn("role")?.setFilterValue(isChecked ? 'super admin' : '');
                          }}
                          className="focus-visible:ring-0 h-4 w-4"
                        />
                        <label
                          htmlFor="super_admin"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Super Admin
                        </label>

                      </div>

                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex justify-center items-center gap-2  cursor-pointer border border-dashed py-2.5 px-5 sm:px-2 rounded-md">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  <small className="text-xs font-medium leading-none  md:flex ">
                    Courses
                  </small>
                </div>
              </PopoverTrigger>
              <PopoverContent align='start' className="w-[200px]">
                <div>
                  <div role="group">
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                     <div className="flex items-center space-x-2">
                        {/* <Checkbox id="clinical" /> */}
                        <input
                          id="preclinical"
                          type='checkbox'
                          checked={(table.getColumn("course")?.getFilterValue() === 'preclinical')}
                          onChange={(event) => {
                            const isChecked = event.target.checked;
                            table.getColumn("course")?.setFilterValue(isChecked ? 'preclinical' : '');
                          }}
                          className="focus-visible:ring-0 h-4 w-4"
                        />
                        <label
                          htmlFor="preclinical"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Preclinical
                        </label>

                      </div>

                    </div>
                    <div
                      role="menuitem"
                      className="relative hover:bg-[#F4F4F5] flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center space-x-2">
                        {/* <Checkbox id="clinical" /> */}
                        <input
                          id="clinical"
                          type='checkbox'
                          checked={(table.getColumn("course")?.getFilterValue() === 'clinical')}
                          onChange={(event) => {
                            const isChecked = event.target.checked;
                            table.getColumn("course")?.setFilterValue(isChecked ? 'clinical' : '');
                          }}
                          className="focus-visible:ring-0 h-4 w-4"
                        />
                        <label
                          htmlFor="clinical"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Clinical
                        </label>

                      </div>

                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
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
          <TableBody >
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
