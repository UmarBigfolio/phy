'use client'
import React, { useState } from "react";
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
  Bold,
  Car,
  ChevronDown,
  FileSliders,
  Italic,
  MinusCircle,
  PlusCircle,
  Underline,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";
import Link from "next/link";
import DatePicker from "../../../components/DatePicker";
import Page from "../../../components/ui/page";
import { ToggleGroup, ToggleGroupItem } from "../../../components/ui/toggle-group";
import { Textarea } from "../../../components/ui/textarea";

const PAGE = () => {
  const [inputs, setInputs] = useState([""]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <>
      <div className="bg-[#eaeaea59] h-[100%] relative top-60"> </div>
      <div className="relative top-[-100%]">
      <Page>
        <h2 className="text-[1.875rem] font-bold pt-7">
        How to Use
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">How to Use</h2>
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
                  <div className="grid w-full items-center gap-4">
                  <div className="grid gap-4 ">
                <div className="grid gap-4">
                  <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Title</Label>
                    <Input
                      id="Title"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
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
                  <div className="pt-3">
                  <Card >
                  <Collapsible>
                    <CollapsibleTrigger className="p-3 flex gap-1 items-center justify-start w-full">
                      {" "}
                      <ChevronDown size={16} />
                      Clinical
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="steps px-4 py-4">
                      <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Title</Label>
                    <Input
                      id="title"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1 mt-3">
                    <Label htmlFor="maxHeight">Color</Label>
                    <Input
                      id="color"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div>
                  <div className="mt-3">
                    <Label>Icon</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5"> <div className="file-upload mt-[1px]"> <div className="file-upload-button"> <label htmlFor="fileInput" className="flex justify-center gap-1 items-center px-4" > <Upload size={15} /> Upload </label> </div> <input type="file" id="fileInput" className="hidden" /> </div> <Input type="text" placeholder="Or paste a link here" className="" ></Input> </div>
                </div>
                <div>
                  <div className="mt-3">
                    <Label>Image</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5"> <div className="file-upload mt-[1px]"> <div className="file-upload-button"> <label htmlFor="fileInput" className="flex justify-center gap-1 items-center px-4" > <Upload size={15} /> Upload </label> </div> <input type="file" id="fileInput" className="hidden" /> </div> <Input type="text" placeholder="Or paste a link here" className="" ></Input> </div>
                </div>
                  <div className="pt-3">
                  <div className="mt-3">
                    <Label>Modules</Label>
                  </div>
                        {inputs.map((input, index) => (
                          <div key={index} className="flex gap-10 mb-5">
                            <Input
                              className="focus-visible:ring-0"
                              type="text"
                              value={input}
                              onChange={(e) =>
                                handleInputChange(index, e.target.value)
                              }
                              placeholder="Title , Icon"
                            />
                            <Button
                              onClick={() => handleRemoveInput(index)}
                              variant="destructive"
                            >
                              {" "}
                              <MinusCircle size={20} />
                            </Button>
                          </div>
                        ))}
                        </div>
                        <Button onClick={handleAddInput} variant="secondary">
                          {" "}
                          <PlusCircle size={20} className="mr-2" />
                          Add Option
                        </Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
                </div>

                <div className="pt-3">
                  <Card >
                  <Collapsible>
                    <CollapsibleTrigger className="p-3 flex gap-1 items-center justify-start w-full">
                      {" "}
                      <ChevronDown size={16} />
                      Preclinical
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="steps px-4 py-4">
                      <div className="flex flex-col items-right gap-1">
                    <Label htmlFor="maxHeight">Title</Label>
                    <Input
                      id="title"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex flex-col items-right gap-1 mt-3">
                    <Label htmlFor="maxHeight">Color</Label>
                    <Input
                      id="color"
                      defaultValue=""
                      className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                  <div>
                  <div className="mt-3">
                    <Label>Icon</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5"> <div className="file-upload mt-[1px]"> <div className="file-upload-button"> <label htmlFor="fileInput" className="flex justify-center gap-1 items-center px-4" > <Upload size={15} /> Upload </label> </div> <input type="file" id="fileInput" className="hidden" /> </div> <Input type="text" placeholder="Or paste a link here" className="" ></Input> </div>
                </div>
                <div>
                  <div className="mt-3">
                    <Label>Image</Label>
                  </div>
                  <div className="flex gap-2.5 lg:gap-5"> <div className="file-upload mt-[1px]"> <div className="file-upload-button"> <label htmlFor="fileInput" className="flex justify-center gap-1 items-center px-4" > <Upload size={15} /> Upload </label> </div> <input type="file" id="fileInput" className="hidden" /> </div> <Input type="text" placeholder="Or paste a link here" className="" ></Input> </div>
                </div>
                  <div className="pt-3">
                  <div className="mt-3">
                    <Label>Modules</Label>
                  </div>
                        {inputs.map((input, index) => (
                          <div key={index} className="flex gap-10 mb-5">
                            <Input
                              className="focus-visible:ring-0"
                              type="text"
                              value={input}
                              onChange={(e) =>
                                handleInputChange(index, e.target.value)
                              }
                              placeholder="Title , Icon"
                            />
                            <Button
                              onClick={() => handleRemoveInput(index)}
                              variant="destructive"
                            >
                              {" "}
                              <MinusCircle size={20} />
                            </Button>
                          </div>
                        ))}
                        </div>
                        <Button onClick={handleAddInput} variant="secondary">
                          {" "}
                          <PlusCircle size={20} className="mr-2" />
                          Add Option
                        </Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
                </div>
                </div>
              </div>
                  
                </div>
              </div>
                    
                  </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/how-to-use">
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

export default PAGE;
