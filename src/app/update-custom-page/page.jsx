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
import { Textarea } from "../../components/ui/textarea";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
const page = () => {
  return (
    <div className="flex mt-5">
      <div className="w-[25%]">
        <div className="flex items-center justify-between space-y-2 md:py-7 pl-6">
          <h2 className="text-[1.875rem] font-bold">Update Custom Page</h2>
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
                  <Input
                    className="focus-visible:ring-0"
                    id="title"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea className="focus-visible:ring-0 h-[200px]" />
                </div>
              </div>
            </form>
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
