"use client";
import React from "react";
import {HowToUseTable} from "../../components/HowToUseTable"
import Page from "../../components/ui/page";

const HowToUse = () => {
  return (
    <Page title="How to Use"  subTitle="Deploy your new project in one-click." href="/how-to-use/create" btnContent="Add Use">
      <HowToUseTable />
    </Page>
  );
};

export default HowToUse ;
