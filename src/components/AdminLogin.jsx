"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };
  return (
    <div className="mt-40">
      <div className="flex items-center justify-center w-full">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col p-6 md:pr-20 lg:pr-32 2xl:pr-48 space-y-1">
            <h3 className="font-semibold tracking-tight text-2xl">
              Login to Physeo CMS
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <div className="p-6 pt-0 grid gap-4">
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="m@example.com"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <div className="flex justify-end items-center">
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  type={inputType}
                />
                {showPassword ? (
                  <Eye
                    size={20}
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="mt-1 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                  ></Eye>
                ) : (
                  <EyeOff
                    size={20}
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="mt-1 text-sm text-gray-600 hover:text-gray-800 focus:outline-none absolute mr-2 cursor-pointer"
                  ></EyeOff>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">
              Create account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
