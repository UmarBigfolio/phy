import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
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
  Landmark,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";
import Page from "../../../components/ui/page";

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[80%] relative top-60"> </div>
      <div className="relative top-[-80%]">
      <Page>
        <h2 className="text-[1.875rem] font-bold pt-7">
          Create a course
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">Clinical / Preclinical</h2>
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
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Title</Label>
                      <Input id="title" placeholder="Title" />
                    </div>
                  </div>
                </form>
                <div>
                  <div className="mt-3">
                    <Label>Desktop Banner</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5">
                    <div className="file-upload mt-[1px]">
                      <button>
                        <label
                          htmlFor="fileInput"
                          className="file-upload-button"
                        >
                          <Upload size={14} /> <span className="">Upload</span>
                        </label>
                      </button>
                      <input type="file" id="fileInput" className="hidden" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Or paste a link here"
                      className="w-[69%] lg:w-[78%] 2xl:w-[88%]"
                    ></Input>
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <Label>Mobile Banner</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5">
                    <div className="file-upload mt-[1px]">
                      <button>
                        <label
                          htmlFor="fileInput"
                          className="file-upload-button"
                        >
                          <Upload size={14} /> <span className="">Upload</span>
                        </label>
                      </button>
                      <input type="file" id="fileInput" className="hidden" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Or paste a link here"
                      className="w-[69%] lg:w-[78%] 2xl:w-[88%]"
                    ></Input>
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <Label>Icon</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5">
                    <div className="file-upload mt-[1px]">
                      <button>
                        <label
                          htmlFor="fileInput"
                          className="file-upload-button"
                        >
                          <Upload size={14} /> <span className="">Upload</span>
                        </label>
                      </button>
                      <input type="file" id="fileInput" className="hidden" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Or paste a link here"
                      className="w-[69%] lg:w-[78%] 2xl:w-[88%]"
                    ></Input>
                  </div>
                </div>
                <Card className="mt-5">
                  <Collapsible>
                    <CollapsibleTrigger className="p-3 flex gap-1 items-center justify-start w-full">
                      {" "}
                      <ChevronDown size={16} />
                      Steps
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="steps px-4 pb-4">
                        <div className="mt-3">
                          <Label>Step 1</Label>
                          <div className="flex gap-[.5rem] sm:gap-7">
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Name"
                            ></Input>
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Link"
                            ></Input>
                            <Button variant="secondary">Add</Button>
                            <Switch />
                          </div>
                        </div>
                        <div className="mt-3">
                          <Label>Step 2</Label>
                          <div className="flex gap-[.5rem] sm:gap-7">
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Name"
                            ></Input>
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Link"
                            ></Input>
                            <Button variant="secondary">Add</Button>
                            <Switch />
                          </div>
                        </div>
                        <div className="mt-3">
                          <Label>Step 3</Label>
                          <div className="flex gap-[.5rem] sm:gap-7">
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Name"
                            ></Input>
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Link"
                            ></Input>
                            <Button variant="secondary">Add</Button>
                            <Switch />
                          </div>
                        </div>
                        <div className="mt-3">
                          <Label>Step 4</Label>
                          <div className="flex gap-[.5rem] sm:gap-7">
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Name"
                            ></Input>
                            <Input
                              className="focus-visible:ring-0"
                              placeholder="Link"
                            ></Input>
                            <Button variant="secondary">Add</Button>
                            <Switch />
                          </div>
                        </div>

                        <div></div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/courses">
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
