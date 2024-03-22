"use client";
import React from "react";
import { OurStoryTable } from "../../components/OurStoryTable";
import Page from "../../components/ui/page";

const Story = () => {
  return (
    <Page title="Our Story" subTitle="Deploy your new project in one-click." href="/story/create" btnContent="Create Story">
      <OurStoryTable />
    </Page>
  );
};

export default Story;
