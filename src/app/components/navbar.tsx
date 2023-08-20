"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-around text-xl py-4 bg-white whitespace-nowrap items-center">
        <Link href="/" className="font-bold text-3xl">
          Green<span className="text-[#50806B] ">Thumb</span>
        </Link>
        <ul className="lg:flex gap-14 ml-20 font-semibold hidden ">
          <Link href="/" className="hover:text-[#50806B]">
            Home
          </Link>
          <Link href="/" className="hover:text-[#50806B]">
            Products
          </Link>
          <Link href="/" className="hover:text-[#50806B]">
            About Us
          </Link>
          <Link href="/" className="hover:text-[#50806B]">
            Contact Us
          </Link>
        </ul>
        <div className="sm:flex gap-12  items-center hidden">
          <input type="text" placeholder="Search" className="px-2 py-1 w-36" />

          <div className="flex gap-4">
            <div className="border-r-2 border-green-950/50 px-4">
              <Link href="">
                <IoIosSearch size={25} />
              </Link>
            </div>
            <Link href="">
              <PiShoppingCartSimple size={25} />
            </Link>
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
            <Link href="#category" className="hover:text-white">
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
