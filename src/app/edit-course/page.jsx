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
          <h2 className="text-[1.875rem] font-bold">Update Course</h2>
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
                  <Input id="title" placeholder="Title" />
                </div>
              </div>
            </form>
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
                  <input type="file" id="fileInput" className="hidden" />
                </div>
                <Input type='text' placeholder='Or paste a link here' className='w-[86%]'></Input>
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
                  <input type="file" id="fileInput" className="hidden" />
                </div>
                <Input type='text' placeholder='Or paste a link here' className='w-[86%]'></Input>
              </div>
            </div>
            <div >
              <div className="mt-3">
                <Label>Icon</Label>
              </div>
              <div className="flex gap-10">
                <div className="file-upload mt-[1px]">
                  <button>
                    <label htmlFor="fileInput" className="file-upload-button">
                      <ArrowUpToLine size={15} /> Upload
                    </label>
                  </button>
                  <input type="file" id="fileInput" className="hidden" />
                </div>
                <Input type='text' placeholder='Or paste a link here' className='w-[86%]'></Input>
              </div>
            </div>
<Card className='mt-5'>
            <Collapsible>
              <CollapsibleTrigger className="p-3 flex gap-1 items-center justify-center" > <ChevronDown size={16}/>Steps</CollapsibleTrigger>
              <CollapsibleContent>
                <div className="steps px-4 pb-4">
                  <div className="mt-3">
                    <Label>Step 1</Label>
                    <div className="flex gap-7">
                      <Input placeholder='Name'></Input>
                      <Input placeholder='Link'></Input>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Label>Step 2</Label>
                    <div className="flex gap-7">
                      <Input placeholder='Name'></Input>
                      <Input placeholder='Link'></Input>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Label>Step 3</Label>
                    <div className="flex gap-7">
                      <Input placeholder='Name'></Input>
                      <Input placeholder='Link'></Input>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Label>Step 4</Label>
                    <div className="flex gap-7">
                      <Input placeholder='Name'></Input>
                      <Input placeholder='Link'></Input>
                    </div>
                  </div>

                  <div>

                  </div>

                </div>
              </CollapsibleContent>
            </Collapsible>
</Card>

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
