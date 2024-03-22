"use client";
import React from "react";
import { BookTable } from "../../components/BookTable";
import Page from "../../components/ui/page";

const Book = () => {
  return (
    <Page title="Books"  subTitle="Deploy your new project in one-click." href="/book/create" btnContent="Add Book">
      <BookTable />
    </Page>
  );
};

export default Book;
