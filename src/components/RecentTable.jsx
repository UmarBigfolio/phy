import React from "react";

const RecentTable = () => {
  return (
    <div className="lg:mb-16">
      <div class="rounded-xl border bg-card text-card-foreground shadow col-span-3 pt-[5px]">
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="font-semibold leading-none tracking-tight">
            Recent Students
          </h3>
          <p class="text-sm text-muted-foreground">
            You made 265 sales this month.
          </p>
        </div>
        <div class="p-6 pt-0">
          <div class="space-y-8">
            <div class="flex items-center">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <img
                  class="aspect-square h-full w-full"
                  alt="Avatar"
                  src="https://ui.shadcn.com/avatars/01.png"
                />
              </span>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">Olivia Martin</p>
                <p class="text-sm text-muted-foreground">
                  olivia.martin@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div class="flex items-center">
              <span class="relative shrink-0 overflow-hidden rounded-full flex h-9 w-9 items-center justify-center space-y-0 border">
                <img
                  class="aspect-square h-full w-full"
                  alt="Avatar"
                  src="https://ui.shadcn.com/avatars/01.png"
                />
              </span>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">Jackson Lee</p>
                <p class="text-sm text-muted-foreground">
                  jackson.lee@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">+$39.00</div>
            </div>
            <div class="flex items-center">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <img
                  class="aspect-square h-full w-full"
                  alt="Avatar"
                  src="https://ui.shadcn.com/avatars/01.png"
                />
              </span>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
                <p class="text-sm text-muted-foreground">
                  isabella.nguyen@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">+$299.00</div>
            </div>
            <div class="flex items-center">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <img
                  class="aspect-square h-full w-full"
                  alt="Avatar"
                  src="https://ui.shadcn.com/avatars/01.png"
                />
              </span>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">William Kim</p>
                <p class="text-sm text-muted-foreground">will@email.com</p>
              </div>
              <div class="ml-auto font-medium">+$99.00</div>
            </div>
            <div class="flex items-center">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <img
                  class="aspect-square h-full w-full"
                  alt="Avatar"
                  src="https://ui.shadcn.com/avatars/01.png"
                />
              </span>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">Sofia Davis</p>
                <p class="text-sm text-muted-foreground">
                  sofia.davis@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">+$39.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTable;
