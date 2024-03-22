"use client";
import React from "react";
import { BadgesTable } from "../../components/BadgesTable";
import Page from "../../components/ui/page";

const Badges = () => {
  return (
    <Page title="Badges" subTitle="Deploy your new project in one-click." href="badges/create" btnContent="Create Badge">
      <BadgesTable />
    </Page>
  );
};

export default Badges;
