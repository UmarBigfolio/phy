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

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[60%] relative top-60"> </div>
      <div className="relative top-[-60%]">
        <h2 className="text-[1.875rem] font-bold  pl-2 2xl:pl-7 pt-7">
          Update Badge
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7 px-2 2xl:pl-6">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">Badge</h2>
              </Card>
            </div>
            {/* <div className="pt-10">
        <h2 className="text-xs font-medium  pl-2 2xl:pl-7 ">Create a course</h2>
        <h2 className="text-xs font-medium  pl-2 2xl:pl-7 ">Create a course</h2>
        <h2 className="text-xs font-medium  pl-2 2xl:pl-7 ">Create a course</h2>  
        <h2 className="text-xs font-medium  pl-2 2xl:pl-7 ">Create a course</h2>
        <h2 className="text-xs font-medium  pl-2 2xl:pl-7 ">Create a course</h2>  
        </div> */}
          </div>
          <div className="w-full lg:w-[70%] px-2">
            <Card>
              <CardHeader>
                <CardTitle>Create project</CardTitle>
              </CardHeader>
              <Separator className="w-[85%] 2xl:w-[95%] mx-auto" />
              <CardContent className="pt-5">
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="grid gap-4 ">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Badge Title</Label>
                    <Input
                      id="badgeTitle"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Badge URL</Label>
                    <Input
                      id="Badgeurl"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Associate badge with</Label>
                    <Select>
                    <SelectTrigger className="outline-none">
                      <SelectValue placeholder="Badges Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="module">Module</SelectItem>
                      <SelectItem value="courses">Courses</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>
                </div>
                    
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/badges">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button>Update</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
