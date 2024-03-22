import React from "react";
import FileManagerTable from "../../components/FileManagerTable";
import Page from "../../components/ui/page";

const page = () => {
  return (
    <>
      <Page
        title="File manager"
        subTitle="Deploy your new project in one-click."
      >
        <FileManagerTable />
      </Page>
    </>
  );
};

export default page;
