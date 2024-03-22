"use client";
import React from "react";
import { ReviewTable } from "../../components/ReviewTable";
import Page from "../../components/ui/page";

const Review = () => {
  return (
    <Page title="Reviews" subTitle="Deploy your new project in one-click." href="/review/create" btnContent="Create Review">
      <ReviewTable />
    </Page>
  );
};

export default Review;
