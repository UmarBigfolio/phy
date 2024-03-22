"use client";
import React, { useState } from "react";

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"

import { Label } from "../components/ui/label";
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

import { Button } from "../components/ui/button";
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
} from "../components/ui/dropdown-menu";

import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { FolderUp } from "lucide-react";

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    media: "https://physeo-prod.s3.amazonaws.com/1707278335116-IMG_6206%202.jpeg",
    title: "-",
    type: ".jpg",
  },
  {
    id: "m5gr84i9kjk",
    amount: 316,
    status: "success",
    media: "https://physeo-prod.s3.amazonaws.com/1707278335116-IMG_6206%202.jpeg",
    title: "-",
    type: ".jpg",
  },
];

export const columns = [
  {
    accessorKey: "media",
    header: "Media",
    cell: ({ row }) => (
      <Avatar>
      <AvatarImage src={row.getValue("media")} alt="shadcn" />
      <AvatarFallback>CN</AvatarFallback>
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
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return <div className="flex items-center gap-5 justify-end"><Button variant='secondary'>Copy</Button></div>;
    },
  },
];

const FileManagerTable = () => {
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
    <div >
      <div className="w-full">
        <Label htmlFor="file" className="ml-5 cursor-pointer">
          <div className="flex flex-col justify-center gap-2 items-center border border-dashed py-10 rounded-lg hover:border-black">
            <FolderUp size={40} />
            Click or drag file/video to upload
            <Input
              id="file"
              type="file"
              className=" w-[240px] lg:w-[660px] md:ml-2 hidden"
            />
          </div>
        </Label>
        <div className="flex items-center py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <Input
                placeholder="Search"
                value={table.getColumn("title")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table.getColumn("title")?.setFilterValue(event.target.value)
                }
                className="max-w-sm w-[240px] focus-visible:ring-0"
              />{" "}
            </div>
            {/* <div className="flex items-center flex-col md:flex-row gap-3 border border-dashed p-5">
           <Label htmlFor="file" className="ml-5">Upload file</Label>
           <FolderUp />
            <Input id="file" type="file" className=" w-[240px] lg:w-[660px] md:ml-2 hidden" />
            </div> */}
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
    </div>
  );
};

export default FileManagerTable;
