"use client";
import React from "react";
import { AnkingTable } from "../../components/AnkingTable";
import Page from "../../components/ui/page";
const CustomPages = () => {
  return (
    <Page title="Custom Pages" subTitle="Deploy your new project in one-click." href="/anking/create" btnContent="Create Custom Page">
      <AnkingTable />
    </Page>
  );
};

export default CustomPages;
