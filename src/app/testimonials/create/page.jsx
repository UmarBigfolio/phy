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
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  ArrowUpToLine,
  Car,
  ChevronDown,
  FileSliders,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import Link from "next/link";
import Page from "../../../components/ui/page";

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[60%] relative top-60"> </div>
      <div className="relative top-[-60%]">
        <Page>
          <h2 className="text-[1.875rem] font-bold pt-7">Create Testimonial</h2>
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
                          <div className="flex flex-col items-right gap-1">
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
                          </div>
                          <div className="flex flex-col items-right gap-1">
                            <Label htmlFor="maxHeight">Visible</Label>
                            <RadioGroup defaultValue="" className="mt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="show" id="show" />
                                <Label htmlFor="show">Show</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="hide" id="hide" />
                                <Label htmlFor="hide">Hide</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/testimonials">
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
