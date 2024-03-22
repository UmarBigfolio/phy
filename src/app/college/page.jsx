import React from "react";
import { CollegeTable } from "../../components/CollegeTable";
import Page from "../../components/ui/page";

const College = () => {
  return (
    <Page title="Colleges" subTitle=" Deploy your new project in one-click." href="/college/create" btnContent="Insert College">
      <CollegeTable />
    </Page>
  );
};

export default College;
