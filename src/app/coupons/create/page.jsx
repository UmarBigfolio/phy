import React from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { RadioGroup , RadioGroupItem } from "../../../components/ui/radio-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  ArrowUpToLine,
  Car,
  ChevronDown,
  FileSliders,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";
import Link from "next/link";
import DatePicker from "../../../components/DatePicker";
import Page from "../../../components/ui/page";

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[60%] relative top-60"> </div>
      <div className="relative top-[-60%]">
      <Page>
        <h2 className="text-[1.875rem] font-bold pt-7">
          Create Coupons
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">Coupon Codes</h2>
              </Card>
            </div>
          </div>
          <div className="w-full lg:w-[75%]">
            <Card>
              <CardHeader>
                <CardTitle>Create project</CardTitle>
              </CardHeader>
              <Separator className="w-[85%] 2xl:w-[95%] mx-auto" />
              <CardContent className="pt-5">
                <form>
                  <div className="grid w-full items-center gap-4">
                  <div className="grid gap-4 ">
                <div className="grid gap-4">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">All Email</Label>
                    <Input
                      id="email"
                      defaultValue=""
                      className="focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">All Discounts</Label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1 ">
                    <Label htmlFor="maxHeight">Coupon Code</Label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Start Date</Label>
                    <DatePicker />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Expiry Date</Label>
                    <DatePicker />
                  </div>
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

                 

                </div>
              </div>
                    
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/coupons">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        </Page>
      </div>
    </>
  );
};

export default page;
