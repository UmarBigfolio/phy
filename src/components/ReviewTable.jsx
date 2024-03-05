"use client";
import React, { useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
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
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ClipboardPen, Trash2 } from "lucide-react";

const data = [
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
  {
    id: "m5gr84i9",
    title: "Review title",
    description:"---",
    rating:'4',
    image: "-",
    role: "Public Health Sciences",
  },
];

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => <div className="capitalize">{row.getValue("image")}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },

  {
    accessorKey: "description",
    header: "Content",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
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
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex items-center gap-5 justify-center">

<Dialog>
            <DialogTrigger asChild>
            {/* <DotsHorizontalIcon  /> */}
            <ClipboardPen className="w-[20px] cursor-pointer"/>
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
          <Trash2  className="cursor-pointer w-[20px]"/>
        </div>
      );
    },
  },
];

export function ReviewTable() {
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
