import React from "react";
import { PaypalCoupons } from "../../components/PaypalCoupons";
import { StripeCoupons } from "../../components/StripeCoupons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Page from "../../components/ui/page";

const Coupons = () => {
  return (
    <Page title="Coupons Code" subTitle="Deploy your new project in one-click." href="/coupons/create" btnContent="Create Coupons">
      <Tabs defaultValue="paypal">
        <TabsList>
          <TabsTrigger value="paypal">Paypal</TabsTrigger>
          <TabsTrigger value="stripe">Stripe </TabsTrigger>
        </TabsList>
        <TabsContent value="paypal">
          <PaypalCoupons />
        </TabsContent>
        <TabsContent value="stripe">
          <StripeCoupons />
        </TabsContent>
      </Tabs>
    </Page>
  );
};

export default Coupons;
