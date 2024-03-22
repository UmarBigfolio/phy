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
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
  },
  {
    coupons_code: "RS3zk6hD",
   types:"once",
   name:"Test Coupon Code",
   plan:"1 year",
   assigned_user:"-",
   applied_user:"-",
   start_date:"-",
   end_date:"-",
   expire:"-"
   
  },

];

 
 

export const columns = [
 
  {
    accessorKey: "coupons_code",
    header: "Coupon Code",
    cell: ({ row }) => <div className="capitalize">{row.getValue("coupons_code")}</div>,
  },
  {
    accessorKey: "types",
    header: "Types",
    cell: ({ row }) => <div className="capitalize">{row.getValue("types")}</div>,
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => <div className="capitalize">{row.getValue("plan")}</div>,
  },
  {
    accessorKey: "assigned_user",
    header: "Assigned Users",
    cell: ({ row }) => <div className="capitalize">{row.getValue("assigned_user")}</div>,
  },
  {
    accessorKey: "applied_user",
    header: "Applied Users",
    cell: ({ row }) => <div className="capitalize">{row.getValue("applied_user")}</div>,
  },
  {
    accessorKey: "name",
    header: "Coupons Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("start_date")}</div>,
  },
  {
    accessorKey: "end_date",
    header: "End Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("end_date")}</div>,
  },
  {
    accessorKey: "expire",
    header: "Expire",
    cell: ({ row }) => <div className="capitalize">{row.getValue("expire")}</div>,
  },
];

export function StripeCoupons() {
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
   <RecordTable data={data} columns={columns} />
  );
}
