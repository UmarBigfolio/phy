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
  SelectGroup,
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

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[80%] relative top-60"> </div>
      <div className="relative top-[-80%]">
        <h2 className="text-[1.875rem] font-bold  pl-2 2xl:pl-7 pt-7">
          Create a Submodule
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7 px-2 2xl:pl-6">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">SUBMODULE</h2>
              </Card>
            </div>
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
<div className="mt-3">
<Label>
    Modules
</Label>
                <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="anatomy">Anatomy</SelectItem>
          <SelectItem value="biochemistry">Biochemistry</SelectItem>
          <SelectItem value="biostatistics">Biostatistics</SelectItem>
          <SelectItem value="embryology">Embryology</SelectItem>
          <SelectItem value="immunology">Immunology</SelectItem>
          <SelectItem value="microbiology">Microbiology</SelectItem>
          <SelectItem value="pathology">Pathology</SelectItem>
          <SelectItem value="pharmacology">Pharmacology</SelectItem>
          <SelectItem value="physiology">physiology</SelectItem>
          <SelectItem value="Public_health_science">Public Health Sciences</SelectItem>
          <SelectItem value="psychiatry">Psychiatry</SelectItem>
          <SelectItem value="biostatistics">Biostatistics</SelectItem>
          <SelectItem value="differential_diagnoses">Differential Diagnoses</SelectItem>
          <SelectItem value="emergency_medicine">Emergency Medicine</SelectItem>
          <SelectItem value="internal_medicine">Internal Medicine</SelectItem>
          <SelectItem value="immunology">Immunology</SelectItem>
          <SelectItem value="neurology">Neurology</SelectItem>
          <SelectItem value="OBGYN">OBGYN</SelectItem>
          <SelectItem value="pediatrics">Pediatrics</SelectItem>
          <SelectItem value="psychiatry">Psychiatry</SelectItem>
          <SelectItem value="Public_health_science">Public Health Sciences</SelectItem>
          <SelectItem value="surgery">Surgery</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/submodules">
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
