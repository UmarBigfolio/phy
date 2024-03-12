"use client";
import React, { useState } from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command"

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
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
import DatePicker from "./DatePicker";
import { CircleFadingPlus, Search } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

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
    role: "instructor",
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
    role: "student",
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
    role: "student",
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
    course: "physics",
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
    course: "art history",
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
              <Button variant='secondary'>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
              <ScrollArea className="h-[80vh]">
            <div className="mr-5">
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Username</Label>
                  <Input
                    id="lastName"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Email</Label>
                  <Input
                    id="email"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Password</Label>
                  <Input
                    id="password"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">College</Label>
                  <Input
                    id="lastName"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Phone</Label>
                  <Input
                    id="phone"
                    defaultValue=""
                    className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Plans</Label>

                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Plans" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical">Clinical</SelectItem>
                      <SelectItem value="preclinincal">Preclinical</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Role</Label>

                  <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="super-user">Super-admin</SelectItem>
                    </SelectContent>
                  </Select>

                </div>

                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">Start Date</Label>
                  <DatePicker />
                </div>
                <div className="flex flex-col items-right gap-1">
                  <Label htmlFor="maxHeight">End Date</Label>
                  <DatePicker />
                </div>
              </div>
              <DialogFooter className='py-4'>
                <Button type="submit">Submit</Button>
              </DialogFooter>
              </div>
              </ScrollArea>
            </DialogContent>
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

export function DataTableDemo() {
  const [position, setPosition] = useState("bottom")
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
      <div className="flex flex-col lg:flex-row gap-3 items-center py-4">
        <Input
          placeholder="Search student"
          value={(table.getColumn("email")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-[220px] md:w-[240px] focus-visible:ring-0"
        />
        <div className="flex gap-3">
        <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <Button variant="outline"> <CircleFadingPlus size={15} className="mr-2" />Role</Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem>Search Emoji</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <Button variant="outline"> <CircleFadingPlus size={15} className="mr-2" />Plan</Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem>Search Emoji</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="lg:ml-auto">
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
