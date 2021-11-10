import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6x1 mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/120px-Instagram_simple_icon.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-ad">
            <div className="absolute insent-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-9 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm focus:ring-black 
            focus:border-black rounded-md border-gray-300"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-2 -right-2 text-xs w-4 h-4 bg-red-500 rounded-full 
            flex items-center justify-center animate-pulse"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://scontent.fskp2-1.fna.fbcdn.net/v/t1.6435-9/84610106_10216461897806928_7336277515683495936_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s0jhAuSbBv4AX8NE6cy&_nc_ht=scontent.fskp2-1.fna&oh=ff759c7f6e3de40450f9690b7ae663d1&oe=61AF6289"
            alt="profile pic"
            className="h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
