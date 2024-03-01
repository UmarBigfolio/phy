
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
      <div className="flex justify-center items-center gap-2 pr-5 cursor-pointer">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="user"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
          </svg>
          <small className="text-sm font-medium leading-none pr-1 hidden md:flex">
            My Account
          </small>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[225px] mt-2 mr-5">
        <div>
  <div className="px-2 py-1.5 text-sm font-normal">
    <div className="flex flex-col space-y-1">
      <p className="text-sm font-medium leading-none">Bigfolio</p>
      <p className="text-xs leading-none text-muted-foreground">
        hello@Bigfolio.co
      </p>
    </div>
  </div>
  <div
    role="separator"
    aria-orientation="horizontal"
    className="-mx-1 my-1 h-px bg-muted"
  ></div>
  <div role="group">
    <div
      role="menuitem"
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      tabIndex="-1"
      data-orientation="vertical"
      data-radix-collection-item=""
    >
      Profile
      <span className="ml-auto text-xs tracking-widest opacity-60">
        ⇧⌘P
      </span>
    </div>
    <div
      role="menuitem"
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      tabIndex="-1"
      data-orientation="vertical"
      data-radix-collection-item=""
    >
      Billing
      <span className="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
    </div>
    <div
      role="menuitem"
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      tabIndex="-1"
      data-orientation="vertical"
      data-radix-collection-item=""
    >
      Settings
      <span className="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
    </div>
    <div
      role="menuitem"
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      tabIndex="-1"
      data-orientation="vertical"
      data-radix-collection-item=""
    >
      New Team
    </div>
  </div>
  <div
    role="separator"
    aria-orientation="horizontal"
    className="-mx-1 my-1 h-px bg-muted"
  ></div>
  <div
    role="menuitem"
    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    tabIndex="-1"
    data-orientation="vertical"
    data-radix-collection-item=""
  >
    Log out
    <span className="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
  </div>
</div>

      </PopoverContent>
    </Popover>
  )
}
