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
        Create a Book
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">Book</h2>
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
                    <Label htmlFor="maxHeight">Image Url</Label>
                    <Input
                      id="email"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Link</Label>
                    <Input
                      id="firstName"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Type</Label>
                    <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical">Clinical</SelectItem>
                      <SelectItem value="preclinical">Preclinical</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>
              </div>
                    
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/book">
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
