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
    amount: 316,
    status: "success",
    name:"umar",
    lastName:"bbb",
    phone:"4262055",
    role:"student",
    course:"clinical",
    plan:"1 Year",
    expire:"-",
    email: "ken99@yahoo.com",
  },
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        name: "umar",
        lastName: "bbb",
        phone: "4262055",
        role: "student",
        course: "clinical",
        plan: "1 Year",
        expire: "-",
        email: "ken99@gmail.com",
    },
    {
        id: "p8j3k7h2",
        amount: 245,
        status: "pending",
        name: "Alice",
        lastName: "Johnson",
        phone: "1234567",
        role: "instructor",
        course: "programming",
        plan: "6 Months",
        expire: "2024-08-15",
        email: "alice.j@example.com",
    },
    {
        id: "n3b2j8c1",
        amount: 150,
        status: "success",
        name: "Elena",
        lastName: "Garcia",
        phone: "9876543",
        role: "student",
        course: "mathematics",
        plan: "3 Months",
        expire: "2024-06-30",
        email: "elena_g@email.com",
    },
    {
        id: "k9d4m2x8",
        amount: 200,
        status: "failed",
        name: "John",
        lastName: "Doe",
        phone: "5551234",
        role: "student",
        course: "biology",
        plan: "1 Month",
        expire: "2024-03-15",
        email: "johndoe@example.com",
    },
    {
        id: "g7f5t3w2",
        amount: 430,
        status: "success",
        name: "Sophia",
        lastName: "Brown",
        phone: "2223333",
        role: "instructor",
        course: "chemistry",
        plan: "1 Year",
        expire: "2025-02-01",
        email: "sophiab@example.com",
    },
    {
        id: "q2z9p8o7",
        amount: 280,
        status: "success",
        name: "Michael",
        lastName: "Smith",
        phone: "7778888",
        role: "student",
        course: "physics",
        plan: "6 Months",
        expire: "2024-09-30",
        email: "mike.smith@gmail.com",
    },
    {
        id: "r4v8l1u9",
        amount: 180,
        status: "pending",
        name: "Julia",
        lastName: "Lee",
        phone: "4445555",
        role: "student",
        course: "art history",
        plan: "3 Months",
        expire: "2024-07-10",
        email: "julia.lee@example.com",
    },
    {
        id: "t5y0v3s1",
        amount: 370,
        status: "success",
        name: "Daniel",
        lastName: "White",
        phone: "9990000",
        role: "instructor",
        course: "music theory",
        plan: "1 Year",
        expire: "2025-01-01",
        email: "dwhite@music.edu",
    },
    {
        id: "h1j7k5e3",
        amount: 320,
        status: "failed",
        name: "Emma",
        lastName: "Martinez",
        phone: "1112222",
        role: "student",
        course: "psychology",
        plan: "1 Month",
        expire: "2024-03-20",
        email: "emma.m@example.com",
    },
    {
        id: "x8n2z6b4",
        amount: 500,
        status: "success",
        name: "David",
        lastName: "Wilson",
        phone: "6667777",
        role: "student",
        course: "geography",
        plan: "6 Months",
        expire: "2024-10-31",
        email: "davidw@example.com",
    }
];

 
 

export const columns = [
 
  {
    accessorKey: "name",
    header: "First Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("lastName")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="capitalize">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="capitalize">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => <div className="capitalize">{row.getValue("course")}</div>,
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => <div className="capitalize">{row.getValue("plan")}</div>,
  },
  {
    accessorKey: "expire",
    header: "Expire",
    cell: ({ row }) => <div className="capitalize">{row.getValue("expire")}</div>,
  },
  
 
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        
            <>
                <Popover>
            <PopoverTrigger asChild>
              <DotsHorizontalIcon className="h-4 w-4 cursor-pointer" />
            </PopoverTrigger>
          
            <PopoverContent className="w-[400px] mr-[550px] -mt-[220px]">
              <div className="grid gap-4 ">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Edit User</h4>
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Email</label>
                    <Input
                      id="email"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>  
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">First Name</label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Last Name</label>
                    <Input
                      id="lastName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Password</label>
                    <Input
                      id="password"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Phone</label>
                    <Input
                      id="phone"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 

                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Role</label>
                    <Input
                      id="role"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Plans</label>
                    <Input
                      id="plans"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div> 
                  <Button className="mt-2">Submit</Button>
                  
                </div>
              </div>
            </PopoverContent>
          </Popover>
          </>
         
      );
    },
  },
];

export function DataTableDemo() {
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
    <div className="w-full pl-5">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search Student"
          value={(table.getColumn("email")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-[240px]"
        />
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
