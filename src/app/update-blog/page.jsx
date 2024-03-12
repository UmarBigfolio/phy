import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible"

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ArrowUpToLine, Car, ChevronDown } from "lucide-react";

const page = () => {
  return (
    <div className="flex mt-5">
      <div className="w-[25%]">

        <div className="flex items-center justify-between space-y-2 py-7 pl-2 2xl:pl-6">
          <h2 className="text-[1.875rem] font-bold">Update Blog</h2>
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
                  <Label htmlFor="Category">Category</Label>
                  <Input className='focus-visible:ring-0' id="Category" placeholder="Category" />
                </div>
              </div>
               <div>
              <div className="mt-3">
                <Label>Image</Label>
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
            <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea className='focus-visible:ring-0'/>
                </div>
              </div>            
            </form>
            <div className="flex items-center space-x-2 mt-3">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
      >
        Featured
      </Label>
    </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Update</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
