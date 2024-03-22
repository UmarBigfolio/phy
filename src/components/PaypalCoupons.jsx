'use client'
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
import RecordTable from "./ui/recordTable";

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
   <RecordTable columns={columns} data={data}/>
  );
}
