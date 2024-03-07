import React from "react";

const AdminLogin = () => {
  return (
    <div className="mt-40">
      <div class="flex items-center justify-center w-full">
        <div class="rounded-xl border bg-card text-card-foreground shadow">
          <div class="flex flex-col p-6 pr-48 space-y-1">
            <h3 class="font-semibold tracking-tight text-2xl">
              Login to Physeo CMS
            </h3>
            <p class="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <div class="p-6 pt-0 grid gap-4">
            <div class="grid gap-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="m@example.com"
                type="email"
              />
            </div>
            <div class="grid gap-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                type="password"
              />
            </div>
          </div>
          <div class="flex items-center p-6 pt-0">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;