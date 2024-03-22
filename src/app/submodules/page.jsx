"use client";
import React, { useState } from "react";
import {SubmodulesTable} from "../../components/SubmodulesTable";
import Page from "../../components/ui/page";

const page = () => {
  return (
    <Page title="Submodules" subTitle="17 Submodules" href="/submodules/create" btnContent="Add Submodule">
      <SubmodulesTable />
    </Page>
  );
};

export default page;
