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
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { ArrowUpToLine, Car } from "lucide-react";

const page = () => {
  return (
    <div className="flex mt-5">
      <div className="w-[25%]">
      
        <div className="flex items-center justify-between space-y-2 md:py-7 pl-6">
          <h2 className="text-[1.875rem] font-bold">Create Course</h2>
        </div>
    
      </div>
      <div className="w-[70%]">
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input id="title" placeholder="Title" />
                </div>
                {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
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
            <div className="steps">
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
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
