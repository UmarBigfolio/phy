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
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },
  {
    id: "m5gr84i9",
    plan:"1 Year",
    couponsCode:"25P1YEAR",
    assignedUsers:"0",
    appliedUsers:"11",
    startData:"-",
    endDate:"-",
    expire:"-",
  },

];

 
 

export const columns = [
 
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => <div className="capitalize">{row.getValue("plan")}</div>,
  },
  {
    accessorKey: "couponsCode",
    header: "Coupons Code",
    cell: ({ row }) => <div className="capitalize">{row.getValue("couponsCode")}</div>,
  },
  {
    accessorKey: "assignedUsers",
    header: "Assigned Users",
    cell: ({ row }) => <div className="capitalize">{row.getValue("assignedUsers")}</div>,
  },
  {
    accessorKey: "appliedUsers",
    header: "Applied Users",
    cell: ({ row }) => <div className="capitalize">{row.getValue("appliedUsers")}</div>,
  },
  {
    accessorKey: "startData",
    header: "Start Data",
    cell: ({ row }) => <div className="capitalize">{row.getValue("startData")}</div>,
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("endDate")}</div>,
  },
  {
    accessorKey: "expire",
    header: "Expire",
    cell: ({ row }) => <div className="capitalize">{row.getValue("expire")}</div>,
  },

];

export function PaypalCoupons() {
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
      {/* <div className="flex items-center py-4">
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
      </div> */}
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
