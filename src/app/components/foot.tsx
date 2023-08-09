import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Foot() {
  return (
    <footer className="flex flex-col items-center ">
      <div className="py-8 flex flex-col items-center">
        <ul className="grid grid-cols-2 gap-8 sm:flex  font-semibold text-xl ">
          <li>Products</li>
          <li>Returns</li>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul className="flex gap-8 py-8 flex-wrap ">
          <FaYoutube size={30} />
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
          <FaLinkedin size={30} />
        </ul>
      </div>

      <div className="text-xs    bg-[#50806B] text-center w-full py-4 text-white tracking-widest sm:text-xl">
        COPYRIGHT GREEN THUMB. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
