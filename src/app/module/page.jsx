"use client";
import React from "react";
import { ModuleTable } from "../../components/ModuleTable";
import Page from "../../components/ui/page";
const page = () => {
  return (
    <Page title="Modules" subTitle="Deploy your new project in one-click." href="/module/create" btnContent="Add Module">
      <ModuleTable />
    </Page>
  );
};

export default page;
