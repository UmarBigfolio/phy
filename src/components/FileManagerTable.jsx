"use client";
import React, { useState } from "react";
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
import { Input } from "../components/ui/input";
import { FolderUp } from "lucide-react";
import RecordTable from "./ui/recordTable";

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
            </div>
          </div>
        </div>
        <RecordTable columns={columns} data={data} searchTitle />
      </div>
    </div>
  );
};

export default FileManagerTable;
