import React from "react";
import { PaypalCoupons } from "../../components/PaypalCoupons";
import { StripeCoupons } from "../../components/StripeCoupons";
import { Input } from "../../components/ui/input";
import DatePicker from "../../components/DatePicker";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

import {
 CardDescription
} from "../../components/ui/card";
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

const Coupons = () => {
  return (
    <div className="pr-2">
      <div class="flex items-center justify-between space-y-2 py-7 pl-2 2xl:pl-6">
      <span>
        <h2 className="text-[1.875rem] font-bold">Coupons Code</h2>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </span>
              <div class="flex items-center space-x-2">
          <div class="grid gap-2">
          </div>
          <Dialog>
            <DialogTrigger asChild>
            <Button variant="">Create Coupons</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Coupons</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 ">
                <div className="grid gap-4">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">All Email</Label>
                    <Input
                      id="email"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">All Discounts</Label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Start Date</Label>
                    <DatePicker />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Expiry Date</Label>
                    <DatePicker />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight"></Label>
                    <RadioGroup
                      defaultValue="option-one"
                      className="flex gap-5"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">For Single Plan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">For All Plans</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex flex-col items-right gap-1 ">
                    <Label htmlFor="maxHeight">Coupon Code</Label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>

                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          
        </div>
      </div>
      <Tabs defaultValue="paypal"  >
        <TabsList className="ml-2 md:ml-6">
          <TabsTrigger value="paypal">Paypal</TabsTrigger>
          <TabsTrigger value="stripe">Stripe </TabsTrigger>
        </TabsList>
        <TabsContent value="paypal">
          <PaypalCoupons />
        </TabsContent>
        <TabsContent value="stripe"><StripeCoupons /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Coupons;
