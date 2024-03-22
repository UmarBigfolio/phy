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
import { Textarea } from "../../../components/ui/textarea"
import { Checkbox } from "../../../components/ui/checkbox";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible"

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { ArrowUpToLine, Car, ChevronDown, FileSliders } from "lucide-react";
import Link from "next/link";
import Page from "../../../components/ui/page";
import { Separator } from "../../../components/ui/separator";

const page = () => {
  return (
    <>
      <div className="bg-[#eaeaea59] h-[80%] relative top-60"> </div>
      <div className="relative top-[-80%]">
      <Page>
        <h2 className="text-[1.875rem] font-bold pt-7">
          Create page header
        </h2>
        <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
          <div className=" w-full lg:w-[25%]">
            <div className="flex items-center justify-between space-y-2 pb-7">
              <Card className="bg-[#EAEAEA] py-6 pl-6 flex w-full items-center gap-2">
                <FileSliders size={18} />
                <h2 className="font-bold text-lg">Page header</h2>
              </Card>
            </div>
          </div>
          <div className="w-full lg:w-[75%]">
            <Card>
              <CardHeader>
                <CardTitle>Create project</CardTitle>
              </CardHeader>
              <Separator className="w-[85%] 2xl:w-[95%] mx-auto" />
              <CardContent className='pt-5'>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input className='focus-visible:ring-0' id="title" placeholder="Title" />
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="slug">Slug</Label>
                  <Input className='focus-visible:ring-0' id="slug" placeholder="Slug" />
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="Category">Content</Label>
                  <Input className='focus-visible:ring-0' id="Category" placeholder="Content" />
                </div>
              </div>
               <div>
              <div className="mt-3">
                <Label>Desktop Banner</Label>
              </div>
              <div className="flex gap-10">
                <div className="file-upload mt-[1px]">
                  <button>
                    <label htmlFor="fileInput" className="file-upload-button">
                      <ArrowUpToLine size={15} /> Upload
                    </label>
                  </button>
                  <input  type="file" id="fileInput" className="hidden" />
                </div>
                <Input className='focus-visible:ring-0 w-[86%]' type='text' placeholder='Or paste a link here'></Input>
              </div>
              
            </div>   
            <div>
              <div className="mt-3">
                <Label>Mobile Banner</Label>
              </div>
              <div className="flex gap-10">
                <div className="file-upload mt-[1px]">
                  <button>
                    <label htmlFor="fileInput" className="file-upload-button">
                      <ArrowUpToLine size={15} /> Upload
                    </label>
                  </button>
                  <input  type="file" id="fileInput" className="hidden" />
                </div>
                <Input className='focus-visible:ring-0 w-[86%]' type='text' placeholder='Or paste a link here'></Input>
              </div>
              
            </div>           
            </form>

          </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/page_header">
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
