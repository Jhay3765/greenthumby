"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-around text-xl py-4 bg-white whitespace-nowrap items-center">
        <h1 className="font-bold text-3xl">
          Green<span className="text-[#50806B] ">Thumb</span>
        </h1>
        <ul className="lg:flex gap-14 font-semibold hidden ">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="sm:flex hidden">
          <p className="text-gray-400">Search</p>
          <div className="border-r-2 border-gray-400 flex px-8 items-center">
            <Image
              src="/Search.svg"
              alt="Search Button"
              width={20}
              height={25}
            />
          </div>
          <div className="px-4">
            <Image
              src="/Vector.png"
              alt="Cart"
              width={20}
              height={20}
              quality={100}
            />
          </div>

          <div className="border-r-2 border-gray-400 flex px-8 items-center sm:hidden">
            <Image
              src="/Search.svg"
              alt="Search Button"
              width={20}
              height={25}
            />
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu size={30} />
        </div>
      </nav>
      {open && (
        <section className="lg:hidden">
          <ul className="flex flex-col [&>a]:border-b  [&>a]:border-b-slate-900 [&>a]:py-2   text-center  text-xl font-bold bg-[#50806B] ">
            <Link href="/" className="hover:text-white">
              HOME
            </Link>
            <Link href="/" className="hover:text-white">
              PRODUCTS
            </Link>
            <Link href="/" className="hover:text-white">
              ABOUT US
            </Link>
            <Link href="/" className="hover:text-white">
              CONTACT
            </Link>
          </ul>
        </section>
      )}
    </div>
  );
}
