import React from "react";
import { PopoverDemo } from "./myProfilePopOver";
export function TypographySmall() {
  return (
    <>
      <div className="flex justify-center items-center">
       <PopoverDemo/>
      </div>
    </>
  );
}

const Header = () => {
  return (
    <div className=" fixed w-full top-0 z-50 max-w-[1550px]">
      <header className=" px-4 sticky top-0 z-50 w-full border-b-[1px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="flex h-14 items-center justify-between">
          <div class="">
            <a class="flex items-center space-x-2" href="/">
              <span>
                <img
                  className="filter invert-[100%] w-[120px] md:w-[200px] "
                  src="https://www.physeo.com/images/logo.png"
                ></img>
              </span>
            </a>
          </div>

          <div class="flex items-center justify-between space-x-2 md:justify-end">
            <TypographySmall />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
