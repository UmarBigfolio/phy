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
import { ToggleGroup, ToggleGroupItem } from "../../../components/ui/toggle-group";

import { Textarea } from "../../../components/ui/textarea";
import { Checkbox } from "../../../components/ui/checkbox";

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
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  ArrowUpToLine,
  Bold,
  Car,
  ChevronDown,
  FileSliders,
  Italic,
  Underline,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import Link from "next/link";
import Page from "../../../components/ui/page";

const page = () => {
  return (
  <>
      <div className="bg-[#eaeaea59] h-[80%] relative top-60"> </div>
      <div className="relative top-[-80%]">
      <Page>
        <h2 className="text-[1.875rem] font-bold pt-7">
          Create Anking
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">ANKING</h2>
              </Card>
            </div>
          </div>
          <div className="w-full lg:w-[75%]">
            <Card>
              <CardHeader>
                <CardTitle>Create project</CardTitle>
              </CardHeader>
              <SelectSeparator className="w-[85%] 2xl:w-[95%] mx-auto" />
              <CardContent className='pt-2'>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input
                    className="focus-visible:ring-0"
                    id="title"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    className="focus-visible:ring-0"
                    id="slug"
                    placeholder="Slug"
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Card>
                    <ToggleGroup
                      type="multiple"
                      variant="outline"
                      className="my-2 flex justify-start pl-2"
                    >
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                      >
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough"
                      >
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <Separator />

                    <Textarea className="focus-visible:ring-0 outline-none border-none my-2 mx-auto w-[98%]" />
                  </Card>
                </div>
              </div>
            </form>
          </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/anking">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button>Create</Button>
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
