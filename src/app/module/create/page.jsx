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
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { ArrowUpToLine, Car, ChevronDown, Upload } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex mt-20">
      <div className="w-[25%]">
        <div className="flex items-center justify-between space-y-2 py-7 pl-2 2xl:pl-6">
          <h2 className="text-[1.875rem] font-bold">Create Module</h2>
        </div>
      </div>
      <div className="w-[70%]">
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
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
              <div className="flex flex-col items-right gap-1 mt-3">
                <Label htmlFor="maxHeight">Courses</Label>

                <Select>
                  <SelectTrigger className="outline-none">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clinical">Clinical</SelectItem>
                    <SelectItem value="preclinical">Preclinical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
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
                    <Label>PDF</Label>
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
                <div>
                  <div className="mt-3">
                    <Label>Flash Card</Label>
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
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
          <Link href='/module'>
            <Button variant="outline">Cancel</Button>
          </Link>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;