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
} from "./ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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
  DropdownMenuRadioItem,
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
import { Avatar, AvatarImage } from "./ui/avatar";

const data = [
  {
    id: "m5gr84i9",
    icon: "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
    title: "Gastroenterology (5 Videos / Run Time: 0:55:40)",
    module: "-",
  },
  {
    id: "m5gr84i9",
    icon: "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
    title: "Gastroenterology (5 Videos / Run Time: 0:55:40)",
    module: "-",
  },
  {
    id: "m5gr84i9",
    icon: "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
    title: "Gastroenterology (5 Videos / Run Time: 0:55:40)",
    module: "-",
  },
  {
    id: "m5gr84i9",
    icon: "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
    title: "Gastroenterology (5 Videos / Run Time: 0:55:40)",
    module: "-",
  },
];

export const columns = [
  {
    accessorKey: "icon",
    header: "Icon",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src={row.getValue("icon")}></AvatarImage>
      </Avatar>
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
    accessorKey: "module",
    header: "Module",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("module")}</div>
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
              <Link href="submodules/edit">
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
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your data from our server.
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

export function SubmodulesTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [course, setCourse] = useState("preclinical");

  const handleSelectChange = (value) => {
    setCourse(value);
  };

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

  console.log("course", course);
  return (
    <div className="w-full">
      <div className="flex gap-3 items-center pb-4">
          <div id="selectLeft">
            <Select>
              <SelectTrigger className="w-[164px] sm:w-[180px]">
                <SelectValue placeholder="Preclinical" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="preclinical"
                    onClick={() => handleSelectChange("preclinical")}
                  >
                    Preclinical
                  </SelectItem>
                  <SelectItem
                    value="clinical"
                    onClick={() => handleSelectChange("clinical")}
                  >
                    Clinical
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            {course === "preclinical" ? (
              <Select>
                <SelectTrigger className="w-[164px] sm:w-[180px]">
                  <SelectValue placeholder="Anatomy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="anatomy">Anatomy</SelectItem>
                    <SelectItem value="biochemistry">Biochemistry</SelectItem>
                    <SelectItem value="biostatistics">Biostatistics</SelectItem>
                    <SelectItem value="embryology">Embryology</SelectItem>
                    <SelectItem value="immunology">Immunology</SelectItem>
                    <SelectItem value="microbiology">Microbiology</SelectItem>
                    <SelectItem value="pathology">Pathology</SelectItem>
                    <SelectItem value="pharmacology">Pharmacology</SelectItem>
                    <SelectItem value="physiology">physiology</SelectItem>
                    <SelectItem value="Public_health_science">
                      Public Health Sciences
                    </SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            ) : (
              <Select>
                <SelectTrigger className="w-[164px] sm:w-[180px]">
                  <SelectValue placeholder="Biostatistics" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="biostatistics">Biostatistics</SelectItem>
                    <SelectItem value="differential_diagnoses">
                      Differential Diagnoses
                    </SelectItem>
                    <SelectItem value="emergency_medicine">
                      Emergency Medicine
                    </SelectItem>
                    <SelectItem value="internal_medicine">
                      Internal Medicine
                    </SelectItem>
                    <SelectItem value="immunology">Immunology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="OBGYN">OBGYN</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                    <SelectItem value="Public_health_science">
                      Public Health Sciences
                    </SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
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
