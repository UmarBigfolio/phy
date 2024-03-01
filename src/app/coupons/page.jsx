import React from "react";
import { PaypalCoupons } from "../../components/PaypalCoupons";
import { StripeCoupons } from "../../components/StripeCoupons";
import { Input } from "../../components/ui/input";
import DatePicker from "../../components/DatePicker";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const Coupons = () => {
  return (
    <div className="">
      <div class="flex items-center justify-between space-y-2 w-[1330px] md:py-7 pl-6">
        <h2 class="text-3xl font-bold tracking-tight">Coupons Codes</h2>
        <div class="flex items-center space-x-2">
          <div class="grid gap-2">
            {/* <Input placeholder="Search Student" /> */}
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="">Create Coupons</Button>
            </PopoverTrigger>

            <PopoverContent className="w-[400px] mr-[550px] -mt-12">
              <div className="grid gap-4 ">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Create Coupons</h4>
                </div>
                <div className="grid gap-2">
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">All Email</label>
                    <Input
                      id="email"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">All Discounts</label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Start Date</label>
                    <DatePicker />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Expiry Date</label>
                    <DatePicker />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight"></label>
                    <RadioGroup
                      defaultValue="option-one"
                      className="flex gap-5"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <label htmlFor="option-one">For Single Plan</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <label htmlFor="option-two">For All Plans</label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex flex-col items-right gap-1">
                    <label htmlFor="maxHeight">Coupon Code</label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9"
                    />
                  </div>

                  <Button className="mt-2">Submit</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Tabs defaultValue="paypal">
        <TabsList className="ml-6">
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
