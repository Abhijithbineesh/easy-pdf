import { Play } from "lucide-react";
import NavLink from "./navLink";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  //const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 md:px-8 mx-auto ">
      <div className="flex lg:flex-1">
        <NavLink
          href="/"
          className="flex items-center gap-2 shrink-0 no-underline"
        >
          <Play className="w-8 h-8 lg:w-10 lg:h-10 text-gray-950 hover:rotate-180 transform transition duration-200 ease-in-out stroke-blue-600 hover:fill-blue-900" />
          <span className="font-extrabold text-lg lg:text-2xl text-gray-950 tracking-tight">
            EASY
          </span>
        </NavLink>
      </div>

       <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">

        <SignedIn>
          <NavLink href="/dashboard" className=" font-bold">Your Summaries</NavLink>
        </SignedIn>
      </div>

      <div className="flex  lg:flex-1 md:flex-1 items-center justify-end gap-3" >
        <SignedIn>
          <div className="flex gap-2 items-center font-bold">
            <NavLink href="/upload">Upload your pdf</NavLink>
            <SignedIn>
            <UserButton/>
            </SignedIn>
          </div>
          </SignedIn>
          <div className="flex flex-end">
            <SignedOut>
            <NavLink href="/sign-in" className="no-underline font-bold">
              Sign-In
            </NavLink>
            </SignedOut>
          </div>
      </div>
    </nav>
  );
}
