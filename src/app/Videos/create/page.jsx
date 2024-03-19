"use client";
import React, { useState } from "react";
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
  SelectGroup,
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
  Landmark,
  Underline,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../components/ui/toggle-group";
import { Textarea } from "../../../components/ui/textarea";
import { Checkbox } from "../../../components/ui/checkbox";
// import { Input } from '../../../components/ui/input';
// import { Button } from '../../../components/ui/button';
import { MinusCircle, PlusCircle } from "lucide-react";

const page = () => {
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
      <div className="bg-[#eaeaea59] h-[90%] relative top-60"> </div>
      <div className="relative top-[-90%]">
        <h2 className="text-[1.875rem] font-bold  pl-2 2xl:pl-7 pt-7">
          Create a video
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7 px-2 2xl:pl-6">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">Clinical / Preclinical</h2>
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
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Title</Label>
                      <Input id="title" placeholder="Title" />
                    </div>
                  </div>
                </form>
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
                <div>
                  <div className="mt-3">
                    <Label>Video</Label>
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
                    <Label>VTT File</Label>
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
                    <Label>PDF </Label>
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
                    <Label>Audio</Label>
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
                    <Label>MNEMONICS Desktop</Label>
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
                    <Label>MNEMONICS Mobile</Label>
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
                    <Label>Answer</Label>
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="a">a</SelectItem>
                        <SelectItem value="b">b</SelectItem>
                        <SelectItem value="c">c</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
                      <SelectSeparator />

                      <Textarea className="focus-visible:ring-0 outline-none border-none my-2 mx-auto w-[98%]" />
                    </Card>
                  </div>
                </div>
                <div className="grid w-full items-center gap-4 mt-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="quiz">Quiz</Label>
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
                      <SelectSeparator />

                      <Textarea className="focus-visible:ring-0 outline-none border-none my-2 mx-auto w-[98%]" />
                    </Card>
                  </div>
                </div>
                <div className="grid w-full items-center gap-4 mt-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Explaination">Explaination</Label>
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
                      <SelectSeparator />

                      <Textarea className="focus-visible:ring-0 outline-none border-none my-2 mx-auto w-[98%]" />
                    </Card>
                  </div>
                </div>

                <Card className="mt-5">
                  <Collapsible>
                    <CollapsibleTrigger className="p-3 flex gap-1 items-center justify-start w-full">
                      {" "}
                      <ChevronDown size={16} />
                      Options
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="steps px-4 pb-4">
                        {inputs.map((input, index) => (
                          <div key={index} className="flex gap-10 mb-5">
                            <Input
                              className="focus-visible:ring-0"
                              type="text"
                              value={input}
                              onChange={(e) =>
                                handleInputChange(index, e.target.value)
                              }
                              placeholder="Options"
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
                        <Button onClick={handleAddInput} variant="secondary">
                          {" "}
                          <PlusCircle size={20} className="mr-2" />
                          Add Option
                        </Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
                <div className="flex items-center space-x-2 mt-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Trial Video</Label>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Link href="/videos">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button>Create</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
