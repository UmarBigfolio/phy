"use client";
import React from "react";
import { TestimonialsTable } from "../../components/TestimonialsTable";
import Page from "../../components/ui/page";

const Book = () => {
  return (
    <Page title="Testimonials" subTitle="Deploy your new project in one-click." href="" btnContent="Create Section">
      <TestimonialsTable />
    </Page>
  );
};

export default Book;
