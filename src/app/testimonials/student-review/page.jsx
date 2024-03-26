"use client";
import React from "react";
import {StudentReviewsTable} from "../../../components/StudentReviewsTable"
import Page from "../../../components/ui/page";

const Review = () => {
  return (
    <Page title="Past Student Reviews" subTitle="Deploy your new project in one-click." href="/testimonials/student-review/create" btnContent="Create Review">
      <StudentReviewsTable />
    </Page>
  );
};

export default Review;
