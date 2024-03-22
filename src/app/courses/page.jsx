"use client";
import React from "react";
import {CoursesTable} from "../../components/CoursesTable"
import Page from "../../components/ui/page";

const page = () => {
  return (
    <Page title="Courses" subTitle="Deploy your new project in one-click." href="/courses/create" btnContent="Add Course">
        <CoursesTable />
    </Page>
  );
};

export default page ;
