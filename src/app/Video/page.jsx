import React from "react";
import {VideosTable} from "../../components/VideosTable"
import Page from "../../components/ui/page";

const page = () => {
  return (
    <Page title="Videos" subTitle="72 videos" href="/Video/create" btnContent="Add Video">
      <VideosTable />
    </Page>
  );
};

export default page;
