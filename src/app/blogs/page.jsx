"use client";
import React from "react";
import { BlogsTable } from "../../components/BlogsTable";
import Page from "../../components/ui/page";

const Blogs = () => {
  return (
    <Page title="Blogs"  subTitle="Deploy your new project in one-click." href="/blogs/create" btnContent="Create Blog">
      <BlogsTable />
    </Page>
  );
};

export default Blogs;
