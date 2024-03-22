import React from "react";
import { PaypalCoupons } from "../../components/PaypalCoupons";
import { StripeCoupons } from "../../components/StripeCoupons";
import { Input } from "../../components/ui/input";
import DatePicker from "../../components/DatePicker";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

import { CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import Link from "next/link";
import Page from "../../components/ui/page";

const Coupons = () => {
  return (
    <Page>
      <div className="flex items-center justify-between space-y-2 py-7">
        <span>
          <h2 className="text-[1.875rem] font-bold">Coupons Code</h2>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </span>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2"></div>
          <Dialog>
            <DialogTrigger asChild>
              <Link href="/coupons/create">
                <Button variant="">Create Coupons</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
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
