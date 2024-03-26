"use client";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "./select";

import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import Link from "next/link";
const RecordTable = ({data , columns , search =false ,filters = false ,moduleSelect=false, searchTitle=false}) => {
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
  return (
    <div className="w-full">
    {
        moduleSelect && <div className="flex gap-3 items-center mb-4">
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
    }
     <div className="flex flex-col lg:flex-row gap-3 ">
     { search &&
        <Input
        placeholder="Search student"
        value={(table.getColumn("email")?.getFilterValue()) ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="max-w-sm w-[340px] md:w-[240px] focus-visible:ring-0 mb-4"
      />
     }
     {
        searchTitle &&
        <Input
        placeholder="Search"
        value={(table.getColumn("title")?.getFilterValue()) ?? ""}
        onChange={(event) =>
          table.getColumn("title")?.setFilterValue(event.target.value)
        }
        className="max-w-sm w-[340px] md:w-[240px] focus-visible:ring-0 mb-4"
      />
     }
      {filters && 
        <div className="flex gap-6 sm:gap-3 mb-4">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex justify-center items-center gap-2  cursor-pointer border border-dashed py-2.5 px-5 sm:px-2 rounded-md">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
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
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
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
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
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
      }
     
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
  )
}

export default RecordTable