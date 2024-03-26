import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  ArrowUpToLine,
  Bold,
  Car,
  ChevronDown,
  FileSliders,
  Italic,
  Underline,
  Upload,
} from "lucide-react";
import { Separator } from "../../../../components/ui/separator";
import Link from "next/link";
import Page from "../../../../components/ui/page";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { Textarea } from "../../../../components/ui/textarea";

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[70%] relative top-60"> </div>
      <div className="relative top-[-70%]">
        <Page>
          <h2 className="text-[1.875rem] font-bold pt-7">
            Create Employee Review
          </h2>
          <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
            <div className=" w-full lg:w-[25%]">
              <div className="flex items-center justify-between space-y-2 pb-7">
                <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                  <FileSliders size={18} />
                  <h2 className="font-bold text-lg">Testimonial</h2>
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
                            <Label htmlFor="maxHeight">Title</Label>
                            <Input
                              id="title"
                              defaultValue=""
                              className="focus-visible:outline-none focus-visible:ring-0"
                            />
                          </div>
                          {/* <div className="flex flex-col items-right gap-1">
                            <Label htmlFor="maxHeight">Section type</Label>
                            <RadioGroup defaultValue="rating" className=" mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="rating" id="rating" />
                                <Label htmlFor="rating">Rating</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="content" id="content" />
                                <Label htmlFor="content">Content</Label>
                              </div>
                            </RadioGroup>
                          </div> */}
                          <div className="grid w-full items-center gap-4 mt-3">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="slug">Rating</Label>
                              <Input
                                className="focus-visible:ring-0"
                                id="slug"
                                placeholder=""
                                type="number"
                              />
                            </div>
                          </div>
                          <div>
                            <Label>Image</Label>

                            <div className="flex gap-2.5 lg:gap-5">
                              <div className="file-upload mt-[1px]">
                                <div className="file-upload-button">
                                  <label
                                    htmlFor="fileInput"
                                    className="flex justify-center gap-1 items-center px-4"
                                  >
                                    <Upload size={15} />
                                    Upload
                                  </label>
                                </div>
                                <input
                                  type="file"
                                  id="fileInput"
                                  className="hidden"
                                />
                              </div>
                              <Input
                                type="text"
                                placeholder="Or paste a link here"
                                className=""
                              ></Input>
                            </div>
                          </div>
                          <div className="grid w-full items-center gap-4 mt-3">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="message">Message</Label>
                              <Card>
                                <ToggleGroup
                                  type="multiple"
                                  variant="outline"
                                  className="my-2 flex justify-start pl-2"
                                >
                                  <ToggleGroupItem
                                    value="bold"
                                    aria-label="Toggle bold"
                                  >
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
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/testimonials/past-employee-reviews">
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
