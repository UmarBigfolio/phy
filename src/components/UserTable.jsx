"use client";
import React, { useState } from "react";
import RecordTable from '../components/ui/recordTable'
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
} from "./ui/alert-dialog"
import { Label } from "./ui/label";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";

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
    role: "user",
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
    role: "super admin",
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
    role: "admin",
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
    course: "preclinical",
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
    course: "preclinical",
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
            <Link href='user/edit'>
              <Button variant='secondary'>Edit</Button>
              </Link>
            </DialogTrigger>
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

export function UserTable() {
  return (
    <>
   <RecordTable columns={columns} data={data} search={true} filters={true}/>
    </>
  );
}
