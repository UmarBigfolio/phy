"use client";
import React from "react";
import {EmployeeReviewTable} from "../../../components/EmployeeReviewTable"
import Page from "../../../components/ui/page";

const PastEmployeeReview = () => {
  return (
    <Page title="Past Employee Reviews" subTitle="Deploy your new project in one-click." href="/testimonials/past-employee-reviews/create" btnContent="Create Review">
      <EmployeeReviewTable />
    </Page>
  );
};

export default PastEmployeeReview;
