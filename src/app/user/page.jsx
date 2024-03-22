"use client";
import React, { useState } from "react";
import { UserTable } from "../../components/UserTable";
import Page from "../../components/ui/page";
const Students = () => {
  return (
    <Page
      title="User"
      subTitle="72,500 users"
      href="/user/create"
      btnContent="Create User"
    >
      <UserTable />
    </Page>
  );
};

export default Students;
